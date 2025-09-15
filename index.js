const arr = [1, 2, 3];
arr["10"] = "ten";
arr["5"] = "five";
arr["a"] = "letter a";
arr["1.5"] = "one point five";

for (const key in arr) {
    console.log(key);
    // Possible order: "0" "1" "2" "5" "10" "a" "1.5"
}