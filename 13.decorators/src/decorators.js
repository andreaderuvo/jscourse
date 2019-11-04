function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

function log(target, name, descriptor) {
    console.log(target, name, descriptor);
    const original = descriptor.value;
    if (typeof original === 'function') {
        descriptor.value = function(...args) {
            console.log(`Arguments: ${args}`);
            try {
                const result = original.apply(this, args);
                console.log(`Result: ${result}`);
                return result;
            } catch (e) {
                console.log(`Error: ${e}`);
                throw e;
            }
        }
    }
    return descriptor;
}

class Example {
    @readonly
    r;

    rw;

    @log
    sum(a, b) {
        return a + b;
    }

}