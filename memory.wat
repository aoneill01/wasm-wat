(module
    (memory (export "memory") 1)
    (data (i32.const 0) "HAL")
    (func (export "incrementLetters")
        (local $i i32)
        (loop $loop
            (i32.store8 
                (local.get $i)
                (i32.add
                    (i32.load8_u
                        (local.get $i)
                    )
                    (i32.const 1)
                )
            )
            (local.set $i
                (i32.add
                    (i32.const 1)
                    (local.get $i)
                )
            )
            (br_if $loop
                (i32.lt_u
                    (local.get $i)
                    (i32.const 3)
                )
            )
        )
    )
)