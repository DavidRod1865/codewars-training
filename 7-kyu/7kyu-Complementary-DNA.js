function DNAStrand(dna){
    let dnaStrand = 
        dna.split(" ")
        .map(shouldBe => {
          if (shouldBe == "T"){
            return "A"
            } else if (dnaStrand[i] == "A"){
              return "T"
              } else if (dnaStrand[i] == "G"){
                return "C"
                } else (dnaStrand[i] == "C")
                  return "G"
                  })
        .join(" ");
    return dnaStrand
                }