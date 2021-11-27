#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

CapsLock::Ctrl
LControl::CapsLock
Insert & Backspace::SendInput, {Backspace 8}
Insert & Delete::SendInput, {Delete 8}
Insert & Up::SendInput, {Up 8}
Insert & Down::SendInput, {Down 8}
Insert & Left::SendInput, {Left 8}
Insert & Right::SendInput, {Right 8}
Insert & 1::F1
Insert & 2::F2
Insert & 3::F3
Insert & 4::F4
Insert & 5::F5
Insert & 6::F6
Insert & 7::F7
Insert & 8::F8
Insert & 9::F9
Insert & 0::F10
Insert & Esc::`
!a::
  while GetKeyState("a")
  {
    Click
    Sleep, 34
  }
return