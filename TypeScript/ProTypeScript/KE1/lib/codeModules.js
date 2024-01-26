var First;
(function (First) {
    class Example {
        log() {
            console.log('Logging from First.Example.log()');
        }
    }
    First.Example = Example;
})(First || (First = {}));
var Second;
(function (Second) {
    class Example {
        log() {
            console.log('Logging from Second.Example.log()');
        }
    }
    Second.Example = Example;
})(Second || (Second = {}));
