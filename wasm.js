(module
  (global $global0 (mut i32) (i32.const 0))
  (func $get_high (;0;) (export "get_high") (result i32)
    global.get $global0
  )
  (func $mul (;1;) (export "mul") (param $var0 i32) (param $var1 i32) (param $var2 i32) (param $var3 i32) (result i32)
    (local $var4 i64)
    local.get $var0
    i64.extend_i32_u
    local.get $var1
    i64.extend_i32_u
    i64.const 32
    i64.shl
    i64.or
    local.get $var2
    i64.extend_i32_u
    local.get $var3
    i64.extend_i32_u
    i64.const 32
    i64.shl
    i64.or
    i64.mul
    local.tee $var4
    i64.const 32
    i64.shr_s
    i32.wrap_i64
    global.set $global0
    local.get $var4
    i32.wrap_i64
  )
  (func $div_s (;2;) (export "div_s") (param $var0 i32) (param $var1 i32) (param $var2 i32) (param $var3 i32) (result i32)
    (local $var4 i64)
    local.get $var0
    i64.extend_i32_u
    local.get $var1
    i64.extend_i32_u
    i64.const 32
    i64.shl
    i64.or
    local.get $var2
    i64.extend_i32_u
    local.get $var3
    i64.extend_i32_u
    i64.const 32
    i64.shl
    i64.or
    i64.div_s
    local.tee $var4
    i64.const 32
    i64.shr_s
    i32.wrap_i64
    global.set $global0
    local.get $var4
    i32.wrap_i64
  )
  (func $div_u (;3;) (export "div_u") (param $var0 i32) (param $var1 i32) (param $var2 i32) (param $var3 i32) (result i32)
    (local $var4 i64)
    local.get $var0
    i64.extend_i32_u
    local.get $var1
    i64.extend_i32_u
    i64.const 32
    i64.shl
    i64.or
    local.get $var2
    i64.extend_i32_u
    local.get $var3
    i64.extend_i32_u
    i64.const 32
    i64.shl
    i64.or
    i64.div_u
    local.tee $var4
    i64.const 32
    i64.shr_s
    i32.wrap_i64
    global.set $global0
    local.get $var4
    i32.wrap_i64
  )
  (func $rem_s (;4;) (export "rem_s") (param $var0 i32) (param $var1 i32) (param $var2 i32) (param $var3 i32) (result i32)
    (local $var4 i64)
    local.get $var0
    i64.extend_i32_u
    local.get $var1
    i64.extend_i32_u
    i64.const 32
    i64.shl
    i64.or
    local.get $var2
    i64.extend_i32_u
    local.get $var3
    i64.extend_i32_u
    i64.const 32
    i64.shl
    i64.or
    i64.rem_s
    local.tee $var4
    i64.const 32
    i64.shr_s
    i32.wrap_i64
    global.set $global0
    local.get $var4
    i32.wrap_i64
  )
  (func $rem_u (;5;) (export "rem_u") (param $var0 i32) (param $var1 i32) (param $var2 i32) (param $var3 i32) (result i32)
    (local $var4 i64)
    local.get $var0
    i64.extend_i32_u
    local.get $var1
    i64.extend_i32_u
    i64.const 32
    i64.shl
    i64.or
    local.get $var2
    i64.extend_i32_u
    local.get $var3
    i64.extend_i32_u
    i64.const 32
    i64.shl
    i64.or
    i64.rem_u
    local.tee $var4
    i64.const 32
    i64.shr_s
    i32.wrap_i64
    global.set $global0
    local.get $var4
    i32.wrap_i64
  )
)
