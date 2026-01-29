---
layout: post
title: "BarTender打印数据保存成Excel"
subtitle: ""
author: "晴天，微冷"
header-img: "img/tu/home-blue.jpg"
header-mask: 0.4
tags:
- BarTender
- Excel
---
#### 使用VB代码直接实现

```vb
Dim logPath, fso, logLine, fieldName, fieldValue
Dim logFields, fieldNames ' 新增：固定字段名数组（保证Excel列顺序不变）
Dim xlApp, xlBook, xlSheet, lastRow, iCol ' Excel操作相关变量
On Error Resume Next ' 保留异常捕获，处理文件/Excel操作错误

' ====================== 【唯一修改区】======================
logPath = "C:\print_log.xlsx" ' 仅改后缀为xlsx，路径建议无中文/空格
' 配置日志字段：格式【"字段名1"】= 字段取值1 ，新增/删除/修改直接加行/删行即可
' 【重要】fieldNames数组手动同步字段名（保证Excel列顺序固定，必配）
fieldNames = Array("员工姓名", "员工工号", "所属部门", "打印时间")
Set logFields = CreateObject("Scripting.Dictionary")
logFields("员工姓名") = Format.NamedSubStrings("员工姓名").Value ' Bartender标签变量
logFields("员工工号") = Format.NamedSubStrings("员工工号").Value
logFields("所属部门") = Format.NamedSubStrings("所属部门").Value
logFields("打印时间") = FormatDateTime(Now(), 2) & " " & FormatDateTime(Now(), 3) ' 优化时间格式：yyyy-mm-dd hh:mm:ss
' ==========================================================

' 校验日志路径和字段（基础兜底）
If Trim(logPath) = "" Or logFields.Count = 0 Or UBound(fieldNames) < 0 Then
    MsgBox "日志路径未配置、无日志字段或字段名数组未同步！", vbCritical, "错误"
    Exit Sub
End If

' 初始化FSO（用于判断Excel文件是否存在）
Set fso = CreateObject("Scripting.FileSystemObject")

' ====================== Excel核心操作：创建/打开+追加数据 ======================
' 1. 初始化Excel应用（后台运行，不显示窗口，关闭弹框）
Set xlApp = CreateObject("Excel.Application")
xlApp.Visible = False ' 关键：后台操作，不弹出Excel窗口
xlApp.DisplayAlerts = False ' 关键：关闭保存/覆盖等弹框提示

' 2. 判断Excel文件是否存在：不存在则新建（加表头），存在则打开（追加行）
If fso.FileExists(logPath) Then
    ' 打开已存在的Excel文件
    Set xlBook = xlApp.Workbooks.Open(logPath)
    Set xlSheet = xlBook.Sheets(1) ' 操作第一个工作表（Sheet1）
    lastRow = xlSheet.UsedRange.Rows.Count + 1 ' 找到已用区域的下一行，用于追加
Else
    ' 新建Excel工作簿，自动添加表头
    Set xlBook = xlApp.Workbooks.Add
    Set xlSheet = xlBook.Sheets(1)
    lastRow = 1 ' 从第一行开始：先写表头
    ' 写入表头（按fieldNames数组顺序，固定列顺序）
    For iCol = 0 To UBound(fieldNames)
        xlSheet.Cells(lastRow, iCol + 1).Value = fieldNames(iCol)
        xlSheet.Cells(lastRow, iCol + 1).Font.Bold = True ' 表头加粗，更美观
    Next
    lastRow = lastRow + 1 ' 表头写完，下一行开始写数据
End If

' 3. 按固定顺序写入日志数据（列=字段名数组顺序，行=lastRow）
For iCol = 0 To UBound(fieldNames)
    fieldName = fieldNames(iCol)
    ' 取值并清洗：剔除空值/特殊字符，避免Excel写入错误
    fieldValue = Trim(logFields(fieldName))
    xlSheet.Cells(lastRow, iCol + 1).Value = fieldValue
Next

' 4. 自动调整列宽（适配内容，不用手动拉列宽）
xlSheet.UsedRange.Columns.AutoFit

' 5. 保存并关闭Excel（关键：避免文件占用/进程残留）
If fso.FileExists(logPath) Then
    xlBook.Save ' 已存在的文件直接保存
Else
    xlBook.SaveAs logPath, 51 ' 新建文件保存为xlsx格式（51=xlsx，56=xls）
End If
xlBook.Close ' 关闭工作簿
xlApp.Quit ' 退出Excel应用

' ====================== 释放资源+异常处理 ======================
' 按顺序释放所有对象（关键：避免Excel进程残留）
Set xlSheet = Nothing
Set xlBook = Nothing
Set xlApp = Nothing
Set fso = Nothing
Set logFields = Nothing

' 异常提示：捕获Excel/文件操作错误
If Err.Number <> 0 Then
    MsgBox "Excel日志写入失败：" & Err.Description & vbCrLf & "请检查：1.路径权限/文件是否被占用 2.是否安装Excel 3.路径无中文/空格", vbCritical, "错误"
    Err.Clear
End If
```

#### 注意⚠️：具名数据源改成对应名称

脚本事件：OnNewRecord 读取数据库记录之后在打印时执行


