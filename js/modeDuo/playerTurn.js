btn_btn1P1.addEventListener('click', () => {

    //Initialisation de mes fontions.
    addTabBoat1();
    addTabBoat2();
    addTabBoat3();
    addTabBoat4();
    addTabBoat5();
    malplacement = 0;

    //Vérification des placements pour chaque tableau de bateau.

    for (let i = 0; i < positionBateau1.length; i++) 
    {
        if (positionBateau1[i] >= 2100 || (positionBateau1[i] == 2009 && positionBateau1[i + 1] == 2010) || (positionBateau1[i] == 2019 && positionBateau1[i + 1] == 2020) || (positionBateau1[i] == 2029 && positionBateau1[i + 1] == 2030) || (positionBateau1[i] == 2039 && positionBateau1[i + 1] == 2040) || (positionBateau1[i] == 2049 && positionBateau1[i + 1] == 2050) || (positionBateau1[i] == 2059 && positionBateau1[i + 1] == 2060) || (positionBateau1[i] == 2069 && positionBateau1[i + 1] == 2070) || (positionBateau1[i] == 2079 && positionBateau1[i + 1] == 2080) || (positionBateau1[i] == 2089 && positionBateau1[i + 1] == 2090)) 
        {
            console.log('bat1 au dessu de 100');
            positionBat1 = positionBateau1[0];
            boat1PlaceDown = document.getElementById('boat-1P1');
            document.getElementById('200000').appendChild(boat1PlaceDown);
            document.getElementById('boat-1P1').classList.remove('ElementPlacer');
            boat1 = document.getElementById('boat-1P1');
            malplacement++
            break;
        }
        else {
            document.getElementById('boat-1P1').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau2.length; i++) 
    {
        if (positionBateau2[i] >= 2100 || (positionBateau2[i] == 2009 && positionBateau2[i + 1] == 2010) || (positionBateau2[i] == 2019 && positionBateau2[i + 1] == 2020) || (positionBateau2[i] == 2029 && positionBateau2[i + 1] == 2030) || (positionBateau2[i] == 2039 && positionBateau2[i + 1] == 2040) || (positionBateau2[i] == 2049 && positionBateau2[i + 1] == 2050) || (positionBateau2[i] == 2059 && positionBateau2[i + 1] == 2060) || (positionBateau2[i] == 2069 && positionBateau2[i + 1] == 2070) || (positionBateau2[i] == 2079 && positionBateau2[i + 1] == 2080) || (positionBateau2[i] == 2089 && positionBateau2[i + 1] == 2090)) 
        {
            console.log('bat1 au dessu de 100');
            positionBat2 = positionBateau2[0];
            boat2PlaceDown = document.getElementById('boat-2P1');
            document.getElementById('200001').appendChild(boat2PlaceDown);
            document.getElementById('boat-2P1').classList.remove('ElementPlacer');
            boat2 = document.getElementById('boat-2P1');
            malplacement++
            break;
        }
        else 
        {
            document.getElementById('boat-2P1').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau3.length; i++) 
    {
        if (positionBateau3[i] >= 2100 || (positionBateau3[i] == 2009 && positionBateau3[i + 1] == 2010) || (positionBateau3[i] == 2019 && positionBateau3[i + 1] == 2020) || (positionBateau3[i] == 2029 && positionBateau3[i + 1] == 2030) || (positionBateau3[i] == 2039 && positionBateau3[i + 1] == 2040) || (positionBateau3[i] == 2049 && positionBateau3[i + 1] == 2050) || (positionBateau3[i] == 2059 && positionBateau3[i + 1] == 2060) || (positionBateau3[i] == 2069 && positionBateau3[i + 1] == 2070) || (positionBateau3[i] == 2079 && positionBateau3[i + 1] == 2080) || (positionBateau3[i] == 2089 && positionBateau3[i + 1] == 2090)) 
        {
            positionBat3 = positionBateau3[0];
            boat3PlaceDown = document.getElementById('boat-3P1');
            document.getElementById('200002').appendChild(boat3PlaceDown);
            document.getElementById('boat-3P1').classList.remove('ElementPlacer');
            boat3 = document.getElementById('boat-3P1');
            malplacement++
            break;
        }
        else {
            document.getElementById('boat-3P1').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau4.length; i++)
     {
        if (positionBateau4[i] >= 2100 || (positionBateau4[i] == 2009 && positionBateau4[i + 1] == 2010) || (positionBateau4[i] == 2019 && positionBateau4[i + 1] == 2020) || (positionBateau4[i] == 2029 && positionBateau4[i + 1] == 2030) || (positionBateau4[i] == 2039 && positionBateau4[i + 1] == 2040) || (positionBateau4[i] == 2049 && positionBateau4[i + 1] == 2050) || (positionBateau4[i] == 2059 && positionBateau4[i + 1] == 2060) || (positionBateau4[i] == 2069 && positionBateau4[i + 1] == 2070) || (positionBateau4[i] == 2079 && positionBateau4[i + 1] == 2080) || (positionBateau4[i] == 2089 && positionBateau4[i + 1] == 2090)) 
        {
            positionBat4 = positionBateau4[0];
            boat4PlaceDown = document.getElementById('boat-4P1');
            document.getElementById('200003').appendChild(boat4PlaceDown);
            document.getElementById('boat-4P1').classList.remove('ElementPlacer');
            boat4 = document.getElementById('boat-4P1');
            malplacement++
            break;
        }
        else 
        {
            document.getElementById('boat-4P1').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau5.length; i++) 
    {
        if (positionBateau5[i] >= 2100 || (positionBateau5[i] == 2009 && positionBateau5[i + 1] == 2010) || (positionBateau5[i] == 2019 && positionBateau5[i + 1] == 2020) || (positionBateau5[i] == 2029 && positionBateau5[i + 1] == 2030) || (positionBateau5[i] == 2039 && positionBateau5[i + 1] == 2040) || (positionBateau5[i] == 2049 && positionBateau5[i + 1] == 2050) || (positionBateau5[i] == 2059 && positionBateau5[i + 1] == 2060) || (positionBateau5[i] == 2069 && positionBateau5[i + 1] == 2070) || (positionBateau5[i] == 2079 && positionBateau5[i + 1] == 2080) || (positionBateau5[i] == 2089 && positionBateau5[i + 1] == 2090)) 
        {
            positionBat5 = positionBateau5[0];
            boat5PlaceDown = document.getElementById('boat-5P1');
            document.getElementById('200004').appendChild(boat5PlaceDown);
            document.getElementById('boat-5P1').classList.remove('ElementPlacer');
            boat5 = document.getElementById('boat-5P1');
            malplacement++
            break;
        }
        else 
        {
            document.getElementById('boat-5P1').classList.remove('malplacer');
        }

    }
    // Vérification que des bateaux ne soit pas sure la meme case. 
    for (let i = 0; i < positionBateau1.length; i++) 
    {
        for (let u = 0; u < positionBateau2.length; u++) 
        {
            for (let t = 0; t < positionBateau3.length; t++) 
            {
                for (let o = 0; o < positionBateau4.length; o++) 
                {
                    for (let m = 0; m < positionBateau5.length; m++) 
                    {
                        if (positionBateau1[i] == positionBateau2[u] || positionBateau1[i] == positionBateau3[t] || positionBateau1[i] == positionBateau4[o] || positionBateau1[i] == positionBateau5[m] || positionBateau2[u] == positionBateau3[t] || positionBateau2[u] == positionBateau4[o] || positionBateau2[u] == positionBateau5[m] || positionBateau3[t] == positionBateau4[o] || positionBateau3[t] == positionBateau5[m] || positionBateau4[o] == positionBateau5[m]) 
                        {
                            malplacement++;
                            //console.log(malplacement);
                            //console.log('probleme');
                        }
                    }
                }
            }
        }
    }

    //console.log(bat1)
    boatPlayer = [positionBateau1, positionBateau2, positionBateau3, positionBateau4, positionBateau5];
    console.log(boatPlayer);


    if (malplacement >= 1) 
    {
        alert('Un ou des bateaux son mal placé !')
    }
    // Si tous est bien placer , j'enleve les élements inutiles , j'affiche le nouveau tableau pour l'ia. 
    else 
    {
        
    }
})


/* PLAYER TWO */


btn_btn1P2.addEventListener('click', () => {

    //Initialisation de mes fontions.
    addTabBoat1P2();
    addTabBoat2P2();
    addTabBoat3P2();
    addTabBoat4P2();
    addTabBoat5P2();
    malplacement = 0;

    //Vérification des placements pour chaque tableau de bateau.

    for (let i = 0; i < positionBateau1P2.length; i++) 
    {
        if (positionBateau1P2[i] >= 3100 || (positionBateau1P2[i] == 3009 && positionBateau1P2[i + 1] == 3010) || (positionBateau1P2[i] == 3019 && positionBateau1P2[i + 1] == 3020) || (positionBateau1P2[i] == 3029 && positionBateau1P2[i + 1] == 3030) || (positionBateau1P2[i] == 3039 && positionBateau1P2[i + 1] == 3040) || (positionBateau1P2[i] == 3049 && positionBateau1P2[i + 1] == 3050) || (positionBateau1P2[i] == 3059 && positionBateau1P2[i + 1] == 3060) || (positionBateau1P2[i] == 3069 && positionBateau1P2[i + 1] == 3070) || (positionBateau1P2[i] == 3079 && positionBateau1P2[i + 1] == 3080) || (positionBateau1P2[i] == 3089 && positionBateau1P2[i + 1] == 3090)) 
        {
            console.log('bat1 au dessu de 100');
            boat1PlaceDown = document.getElementById('boat-1P2');
            document.getElementById('30000').appendChild(boat1PlaceDown);
            document.getElementById('boat-1P2').classList.remove('ElementPlacer');
            boat1 = document.getElementById('boat-1P2');
            malplacement++
            break;
        }
        else {
            document.getElementById('boat-1P2').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau2P2.length; i++) 
    {
        if (positionBateau2P2[i] >= 3100 || (positionBateau2P2[i] == 3009 && positionBateau2P2[i + 1] == 3010) || (positionBateau2P2[i] == 3019 && positionBateau2P2[i + 1] == 3020) || (positionBateau2P2[i] == 3029 && positionBateau2P2[i + 1] == 3030) || (positionBateau2P2[i] == 3039 && positionBateau2P2[i + 1] == 3040) || (positionBateau2P2[i] == 3049 && positionBateau2P2[i + 1] == 3050) || (positionBateau2P2[i] == 3059 && positionBateau2P2[i + 1] == 3060) || (positionBateau2P2[i] == 3069 && positionBateau2P2[i + 1] == 3070) || (positionBateau2P2[i] == 3079 && positionBateau2P2[i + 1] == 3080) || (positionBateau2P2[i] == 3089 && positionBateau2P2[i + 1] == 3090)) 
        {
            console.log('bat1 au dessu de 100');
            boat2PlaceDown = document.getElementById('boat-2P2');
            document.getElementById('30001').appendChild(boat2PlaceDown);
            document.getElementById('boat-2P2').classList.remove('ElementPlacer');
            boat2 = document.getElementById('boat-2P2');
            malplacement++
            break;
        }
        else 
        {
            document.getElementById('boat-2P2').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau3P2.length; i++) 
    {
        if (positionBateau3P2[i] >= 3100 || (positionBateau3P2[i] == 3009 && positionBateau3P2[i + 1] == 3010) || (positionBateau3P2[i] == 3019 && positionBateau3P2[i + 1] == 3020) || (positionBateau3P2[i] == 3029 && positionBateau3P2[i + 1] == 3030) || (positionBateau3P2[i] == 3039 && positionBateau3P2[i + 1] == 3040) || (positionBateau3P2[i] == 3049 && positionBateau3P2[i + 1] == 3050) || (positionBateau3P2[i] == 3059 && positionBateau3P2[i + 1] == 3060) || (positionBateau3P2[i] == 69 && positionBateau3P2[i + 1] == 3070) || (positionBateau3P2[i] == 3079 && positionBateau3P2[i + 1] == 3080) || (positionBateau3P2[i] == 3089 && positionBateau3P2[i + 1] == 3090)) 
        {
            boat3PlaceDown = document.getElementById('boat-3P2');
            document.getElementById('30002').appendChild(boat3PlaceDown);
            document.getElementById('boat-3P2').classList.remove('ElementPlacer');
            boat3 = document.getElementById('boat-3P2');
            malplacement++
            break;
        }
        else {
            document.getElementById('boat-3P2').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau4P2.length; i++)
     {
        if (positionBateau4P2[i] >= 3100 || (positionBateau4P2[i] == 3009 && positionBateau4P2[i + 1] == 3010) || (positionBateau4P2[i] == 3019 && positionBateau4P2[i + 1] == 3020) || (positionBateau4P2[i] == 3029 && positionBateau4P2[i + 1] == 3030) || (positionBateau4P2[i] == 3039 && positionBateau4P2[i + 1] == 3040) || (positionBateau4P2[i] == 3049 && positionBateau4P2[i + 1] == 3050) || (positionBateau4P2[i] == 3059 && positionBateau4P2[i + 1] == 3060) || (positionBateau4P2[i] == 3069 && positionBateau4P2[i + 1] == 3070) || (positionBateau4P2[i] == 3079 && positionBateau4P2[i + 1] == 3080) || (positionBateau4P2[i] == 3089 && positionBateau4P2[i + 1] == 3090)) 
        {
            boat4PlaceDown = document.getElementById('boat-4P2');
            document.getElementById('30003').appendChild(boat4PlaceDown);
            document.getElementById('boat-4P2').classList.remove('ElementPlacer');
            boat4 = document.getElementById('boat-4P2');
            malplacement++
            break;
        }
        else 
        {
            document.getElementById('boat-4P2').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau5P2.length; i++) 
    {
        if (positionBateau5P2[i] >= 3100 || (positionBateau5P2[i] == 3009 && positionBateau5P2[i + 1] == 3010) || (positionBateau5P2[i] == 3019 && positionBateaP2[i + 1] == 3020) || (positionBateau5P2[i] == 3029 && positionBateau5P2[i + 1] == 3030) || (positionBateau5P2[i] == 3039 && positionBateau5P2[i + 1] == 3040) || (positionBateau5P2[i] == 3049 && positionBateau5P2[i + 1] == 3050) || (positionBateau5P2[i] == 3059 && positionBateau5P2[i + 1] == 3060) || (positionBateau5P2[i] == 3069 && positionBateau5P2[i + 1] == 3070) || (positionBateau5P2[i] == 3079 && positionBateau5P2[i + 1] == 3080) || (positionBateau5P2[i] == 3089 && positionBateau5P2[i + 1] == 3090)) 
        {
            boat5PlaceDown = document.getElementById('boat-5P2');
            document.getElementById('30004').appendChild(boat5PlaceDown);
            document.getElementById('boat-5P2').classList.remove('ElementPlacer');
            boat5 = document.getElementById('boat-5P2');
            malplacement++
            break;
        }
        else 
        {
            document.getElementById('boat-5P2').classList.remove('malplacer');
        }

    }
    // Vérification que des bateaux ne soit pas sure la meme case. 
    for (let i = 0; i < positionBateau1P2.length; i++) 
    {
        for (let u = 0; u < positionBateau2P2.length; u++) 
        {
            for (let t = 0; t < positionBateau3P2.length; t++) 
            {
                for (let o = 0; o < positionBateau4P2.length; o++) 
                {
                    for (let m = 0; m < positionBateau5P2.length; m++) 
                    {
                        if (positionBateau1P2[i] == positionBateau2P2[u] || positionBateau1P2[i] == positionBateau3P2[t] || positionBateau1P2[i] == positionBateau4P2[o] || positionBateau1P2[i] == positionBateau5P2[m] || positionBateau2P2[u] == positionBateau3P2[t] || positionBateau2P2[u] == positionBateau4P2[o] || positionBateau2P2[u] == positionBateau5P2[m] || positionBateau3P2[t] == positionBateau4P2[o] || positionBateau3P2[t] == positionBateau5P2[m] || positionBateau4P2[o] == positionBateau5P2[m]) 
                        {
                            malplacement++;
                            //console.log(malplacement);
                            //console.log('probleme');
                        }
                    }
                }
            }
        }
    }

    //console.log(bat1)
    boatPlayer2 = [positionBateau1P2, positionBateau2P2, positionBateau3P2, positionBateau4P2, positionBateau5P2];
    console.log(boatPlayer2);


    if (malplacement >= 1) 
    {
        alert('Un ou des bateaux son mal placé !')
    }
    // Si tous est bien placer , j'enleve les élements inutiles , j'affiche le nouveau tableau pour l'ia. 
    else 
    {
        
    }
})
