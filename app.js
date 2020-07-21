function print() {
    var ProGrad2 = "Charan";
    var ProGrad1 = "Chaitra";
    console.log("Drivers Name is " + ProGrad2);
    console.log("Navigators Name is " + ProGrad1);
    var count = 0;
    var count1 = 0;


    for (i = 0; ProGrad1.charAt(i) != '\0'; i++) {
        count++;
    }
    for (i = 0; ProGrad2.charAt(i) != '\0'; i++) {
        count1++
    }
    if (count > count1) {
        console.log("prograd1 has the longest name and it has characters");
    } else if (count < count1) {
        console.log("prograd2 has the longest name and it has" + count + "characters");
    } else {
        console.log("both have " + count + "these many letters");
    }

    for (var i = 0; ProGrad1.charAt(i) != '\0'; i++) {
        if (ProGrad1.charAt(i) == 'a' || ProGrad1.charAt(i) == 'e' || ProGrad1.charAt(i) == 'i' || ProGrad1.charAt(i) == 'o' || ProGrad1.charAt(i) == 'u') {
            console.log(ProGrad1.char(i) + " in Prograd1 which is present at location " + i);
        } else {
            console.log("no vowels");
        }
    }

    for (var i = 0; ProGrad2.charAt(i) != '\0'; i++) {
        if (ProGrad2.charAt(i) == 'a' || ProGrad2.charAt(i) == 'e' || ProGrad2.charAt(i) == 'i' || ProGrad2.charAt(i) == 'o' || ProGrad2.charAt(i) == 'u') {
            console.log(ProGrad2.char(i) + " in Prograd1 which is present at location " + i);
        } else {
            console.log("no vowels");
        }
    }
    var uppercase1 = 0;
    var lowercase1 = 0;
    for (var i = 0; ProGrad1.charAt(i) != '\0'; i++) {
        var letter = ProGrad2.charAt(i)
        if (ProGrad1.charAt(i) == letter.toUpperCase() || ProGrad1.charAt(i) != letter.toLowerCase()) {
            uppercase1++;
        } else if (ProGrad1.charAt(i) == letter.toLowerCase() || ProGrad1.charAt(i) != letter.toUpperCase()) {
            lowercase1++;
        }

    }



    for (var i = 0; ProGrad2.charAt(i) != '\0'; i++) {
        var letter = ProGrad2.charAt(i)
        if (ProGrad2.charAt(i) == letter.toUpperCase() || ProGrad2.charAt(i) != letter.toLowerCase()) {
            uppercase1++;
        } else if (ProGrad2.charAt(i) == letter.toLowerCase() || ProGrad2.charAt(i) != letter.toUpperCase()) {
            lowercase1++;
        }

    }


    console.log(uppercase1 + "" + lowercase1);
    var count = ProGrad2.length();
    for (i = count; i > 0; i--) {
        console.log(ProGrad2.charAt(i));
    }
}