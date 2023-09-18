function flatten(xs){
    return accumulate(append, null, xs);
}

flatten(list(list(1,2,3), list(3,4)));

function sum_tree(xs){
    if (is_null(xs)){
        return 0;
    } else {
        if (is_list(head(xs))){
            return sum_tree(head(xs)) + sum_tree(tail(xs));
        } else {
            return head(xs) + sum_tree(tail(xs));
        }
    }
}
//const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));
const my_tree = list(1,2,3,4,5,1,4, list(1,23),1);
// function accumulate_tree(f, op, initial, tree){
//     return accumulate((x,y) => ! (is_list(x) && ! is_list(y))
//                                 ? op(f(x),f(y)) 
//                                 : ! is_list(x) 
//                                 ? op(x, accumulate_tree(f, op, initial, y))
//                                 : op(accumulate_tree(f, op, initial, x), f(y)), initial, tree);
// }


function accumulate_tree(f, op, initial, tree){
    return accumulate((curr, wish)=> is_number(curr)
                                     ? op(f(curr), wish)
                                     : accumulate_tree(f, op, initial, curr) + wish
                                     , initial, tree
                                     );
}
// function sum_tree(tree){
//     return accumulate_tree(x=>x, (x,y)=> x+y, 0, tree);
// }

accumulate_tree(x=>x, (x,y)=>x+y, 0, my_tree);
// sum_tree_2(my_tree);
