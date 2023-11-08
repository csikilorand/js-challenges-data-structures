const displayLikes = (arrayofNames) =>{
    switch(arrayofNames.length){
        case 0:
            return 'no one likes this';
        case 1:
            return `${arrayofNames[0]} likes this`;
        case 2:
            return `${arrayofNames[0]} and ${arrayofNames[1]} like this`
        case 3:
            return `${arrayofNames[0]}, ${arrayofNames[1]} and ${arrayofNames[2]} like this`
        default:
            //const remaining = arrayofNames.length -2
            return `${arrayofNames[0]}, ${arrayofNames[1]} and ${arrayofNames.length-2} others like this`
    }
}
module.exports = displayLikes;