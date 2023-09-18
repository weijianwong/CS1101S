function my_map(f, xs){
    return accumulate((curr, wish) => append(list(f(curr)), wish), null, xs);
}

my_map(x=>x+1, list(1,2,3,4));

function remove_duplicates(lst){
    return is_null(lst)
           ? null
           : pair(head(lst), remove_duplicates(filter(x => !equal(head(lst), x), tail(lst))));    
    // function remove_dup(xs){
    //     if (is_null(xs)){
    //         return null;
    //     } else {
    //         const removed = remove_all(head(xs), xs);
    //         return append(list(head(xs)), remove_dup(removed));
    //     }
    // }
    
    // //return filter(x => is_unique(x, lst), lst);
    // return remove_dup(lst);
}
remove_duplicates(list(1,2,3,4,1,2,3,6));

function makeup_amount(x, coins) {
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
        return null;
    } else {
    // Combinations that do not use the head coin.
        const combi_A = makeup_amount(x, tail(coins));
    // Combinations that do not use the head coin
    // for the remaining amount.
        const combi_B = makeup_amount(x - head(coins), tail(coins));
    // Combinations that use the head coin.
        const combi_C = append(list(head(coins)) ,makeup_amount(x - head(coins), coins));
        return append(combi_A, combi_C);
    }
}
//makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50));