function biggie_sized(reg_combo) {
    return reg_combo + 4;
}

function unbiggie_sized(big_sized){
    return big_sized - 4;
}

function is_biggie_sized(combo){
    return combo > 4;
}

function combo_price(combo){
    return is_biggie_sized(combo)? unbiggie_sized(combo) * 1.17 + 0.5: combo *1.17;
}

function empty_order(){
    return 0;
}
1
function add_to_order(order, combo){
    const new_order_in_str = stringify(order) + stringify(combo);
    return parse_int(new_order_in_str, 10);
    // order *10 + combo // to add a number to the end of another number.
}

function last_combo(order){
    return order % 10;
}

function other_combos(order){
    return (order - last_combo(order)) / 10;
    // math_floor(order/10);
}

