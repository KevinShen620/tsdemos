import * as Q from "q";

function p(): Q.Promise<string> {
    
    let defer = Q.defer<string>();
    defer.resolve("");
    return defer.promise;
}


