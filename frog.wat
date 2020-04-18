(module
    (func (export "jumpTo") (param $n i32) (result i32)
        (local $sum i32)
        (local $jumps i32)
        (if
            (i32.lt_s
                (local.get $n)
                (i32.const 0)
            )
            (then
                (local.set $n
                    (i32.mul
                        (i32.const -1)
                        (local.get $n)
                    )
                )
            )
        )
        (loop $while
            (if
                (i32.or
                    (i32.lt_s
                        (local.get $sum)
                        (local.get $n)
                    )
                    (i32.eq
                        (i32.rem_s
                            (i32.sub
                                (local.get $sum)
                                (local.get $n)
                            )
                            (i32.const 2)
                        )
                        (i32.const 1)
                    )
                )
                (then
                    (local.set $jumps
                        (i32.add
                            (local.get $jumps)
                            (i32.const 1)
                        )
                    )
                    (local.set $sum
                        (i32.add
                            (local.get $sum)
                            (local.get $jumps)
                        )
                    )
                    (br $while)
                )
            )
        )
        (local.get $jumps)
    )
)