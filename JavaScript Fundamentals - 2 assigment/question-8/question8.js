const eventDates = new Date('8/31/2023');

function differenceBetweenDate(eventDate) {
    const currentDate=new Date()
    const diffTime=Math.abs(currentDate-eventDate)  //give result in millisecond

    const diffDays=Math.floor(diffTime / (1000 * 60 * 60 * 24)); //change into days

    return diffDays;

}

const outputs=differenceBetweenDate(eventDates);
console.log(`days : ${outputs}`);





