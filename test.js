function matchCombinator(k, s) {
    let count = 0;

    for (let x = 0; x <= k; x++) {
        for (let y = 0; y <= k; y++) {
            const z = s - (x + y)

            if (z >= 0 && z <= k) {
                count++;
            }
        }
    }
    console.log(count)

}

matchCombinator(2, 1) // 3