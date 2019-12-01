module.exports = function (degree){
    if (degree <= 90 && degree > 0){
        return {quadrant:'I', sign:'positive'};
    } else if(degree <= 180 && degree > 90){
        return {quadrant:'II', sign:'negative'}
    } else if (degree <= 270 && degree > 180){
        return {quadrant:'III', sign:'positive'}
    } else if (degree <= 360 && degree > 270){
        return {quadrant:'IV', sign:'negative'}
    } else {
        return {quadrant:'NOTHING BECAUSE ITS ZERO', sign:'NOTHING'}
    };
 }