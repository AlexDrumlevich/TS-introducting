

     a = {
        a: 10,
        b : function() {
            return 20
        },
        function() {
            return 30
        },
        v() {
            return 40
        },
        c: (t) => {}
    }

    Object.entries(a).forEach(e => console.log(e));
    console.log(a.v())