function piramide(miNumero) {

    for (let i = 0; i <= miNumero; i++) {
            
        for (let rep = 1; rep <= i; rep++) {
                document.write(rep);
        }
            document.write("<br>");
        }
    } 

piramide(6)