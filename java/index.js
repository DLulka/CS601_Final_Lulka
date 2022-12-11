const url = 'https://mellow-bonbon-e92766.netlify.app/java/certifications.json';
    function getinfo() {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                document.getElementById("show").style.display = "block";
                let getCert = certs => certs.certification;
                let certNames = data.map(getCert);
                let getSchool = certs => certs.school;
                let school = data.map(getSchool);
                let getIssued = certs => certs.issued;
                let issued = data.map(getIssued);
                document.getElementById("cert1").innerHTML = certNames[0];
                document.getElementById("cert2").innerHTML = certNames[1];
                document.getElementById("cert3").innerHTML = certNames[2];
                document.getElementById("cert4").innerHTML = certNames[3];
                document.getElementById("cert5").innerHTML = certNames[4];
                document.getElementById("cert6").innerHTML = certNames[5];
                document.getElementById("cert7").innerHTML = certNames[6];
                document.getElementById("cert8").innerHTML = certNames[7];
                document.getElementById("cert9").innerHTML = certNames[8];
                document.getElementById("pschool1").innerHTML = `School:             ${school[0]}`;
                document.getElementById("pissued1").innerHTML = `Issued date:   ${issued[0]}`;
                document.getElementById("pschool2").innerHTML = `School:             ${school[1]}`;
                document.getElementById("pissued2").innerHTML = `Issued date:   ${issued[1]}`;
                document.getElementById("pschool3").innerHTML = `School:             ${school[2]}`;
                document.getElementById("pissued3").innerHTML = `Issued date:   ${issued[2]}`;
                document.getElementById("pschool4").innerHTML = `School:             ${school[3]}`;
                document.getElementById("pissued4").innerHTML = `Issued date:   ${issued[3]}`;
                document.getElementById("pschool5").innerHTML = `School:             ${school[4]}`;
                document.getElementById("pissued5").innerHTML = `Issued date:   ${issued[4]}`;
                document.getElementById("pschool6").innerHTML = `School:             ${school[5]}`;
                document.getElementById("pissued6").innerHTML = `Issued date:   ${issued[5]}`;
                document.getElementById("pschool7").innerHTML = `School:             ${school[6]}`;
                document.getElementById("pissued7").innerHTML = `Issued date:   ${issued[6]}`;
                document.getElementById("pschool8").innerHTML = `School:             ${school[7]}`;
                document.getElementById("pissued8").innerHTML = `Issued date:   ${issued[7]}`;
                document.getElementById("pschool9").innerHTML = `School:             ${school[8]}`;
                document.getElementById("pissued9").innerHTML = `Issued date:   ${issued[8]}`;            
            })
            .catch(function(error) {
                alert(error);
                console.log(error);
              });
    }
getinfo();