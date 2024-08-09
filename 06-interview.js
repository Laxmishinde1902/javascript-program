console.log("================Graduation Score==================");

var interviewEligibility = function(gradScore,hscScore,sscScore,candidateName){
    if (gradScore >=70 || hscScore >= 80 || sscScore > 90) {
        console.log(`Congrats , ${candidateName} you are eligible for TCS Interview`);
        
    } else {
        console.log(`Unfortunately ${candidateName} you are not eligible for TCS Interview`);
    }
}
interviewEligibility(80,86,90,"Laxmi");
interviewEligibility(70,65,55,"Sandip");
interviewEligibility(60,79,88,"Neha");