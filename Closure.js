
function outer(){
    var a=10
    function inner(){
        function innerin(){
            console.log(a)
        }
        innerin()
    }
    inner()
}
outer()


