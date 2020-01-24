function task1 () {
            var a = 1, b = 1, c, d
            c = ++a 
            console.log (c)         
            // 2
            
            d = b++ 
            console.log (d)         
            // 1
            
            c = (2+ ++a) 
            console.log (c)      
            // 5
            
            d = (2+ b++)
            console.log (d)      
            // 4
            
            console.log (a)                   
            // 3
            
            console.log (b)

            // тут нужно объяснение написать? Тогда отпишусь словами из методички: 
            // В постфиксной форме сначала происходит возвращение значения, а потом выполняется инкрементирование. 
            // В префиксной форме инкрементирование производится сразу, а возврат — уже с обновленным значением.

        }

        function task2 () {
            var a = 2
            var x = 1 + (a *= 2)

            console.log (x)
            // 5 
        }

        function task3 () {
            var a = 10
            var b = 20

            // сорри, но я вообще не поняла суть вопроса           
        }

        
        function task4 () {
            var a = +prompt ('Введите число от 0 до 15')
        
            switch (a) {
                case 0:
                    console.log (a++)
                case 1:
                    console.log (a++)
                case 2:
                    console.log (a++)
                case 3:
                    console.log (a++)
                case 4:
                    console.log (a++)
                case 5:
                    console.log (a++)
                    break
                default:
                    console.log ('Не угадали, попробуйте еще раз')
            }
             
        }