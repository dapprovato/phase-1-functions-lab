function distanceFromHqInBlocks(blocks) {
    const hq = 42    
        if (blocks > 42){ 
            return blocks - hq
        } else if (blocks < 42){
            return hq - blocks
        }
}

function distanceFromHqInFeet(feet) {
    const hq = 42
    const oneBlock = 264
        if (feet > 42){
            return (feet - hq) * oneBlock
        } else if (feet < 42){
            return (hq - feet) * oneBlock
        }
        
}

function distanceTravelledInFeet(travel1 , travel2) {
    const oneBlock = 264
    const feetTravelled = travel2 - travel1
        if (feetTravelled > 0){
            return feetTravelled * oneBlock
        } else if (feetTravelled < 0){
            return feetTravelled * (oneBlock * -1)
        }
}

function calculatesFarePrice(start, destination) {
    const oneBlock = 264
    const feetTravelled = Math.abs(destination - start)
        if (feetTravelled * oneBlock < 399){
            return 0
        } else if (feetTravelled * oneBlock <= 2001){
            return ((feetTravelled * oneBlock) - 400) * 0.02
        } else if (feetTravelled * oneBlock <= 2499){
            return 25
        } else if (feetTravelled * oneBlock > 2500){
            return 'cannot travel that far'
        }
    }