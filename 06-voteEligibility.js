var voteEligibility = function(age){
    if (age==0|| age < 0 || age > 130 || age==null ) {
        console.log(`Invalid data: ${age}`);
    } else {
        console.log(`valid data: ${age}`);
           if (age>=18) {
            console.log(`Your age is: ${age} & is eligible for voting`);
            
           } else {
            console.log(`your age is: ${age} & is not eligible for voting`);
           }
    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8 ,);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(null);