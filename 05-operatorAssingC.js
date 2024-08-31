console.log(`=============== TCS Interview eligibility ===============`);
 
    function tcsEligibility(gradScore,hscScore,sscScore,candidateName){
       const result = gradScore>=70 || hscScore >=80 || sscScore >= 90 
       ? `Congrats ${candidateName} you are eligible for TCS interview`
       : `Unfortunately ${candidateName} you are not eligible for TCS interview`
       console.log(result);
       
    }
    tcsEligibility(80,86,90,"Laxmi");
    tcsEligibility(70,65,55,"Sandip");
    tcsEligibility(60,79,88,"sham");