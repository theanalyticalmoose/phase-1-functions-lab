// Assuming 1 block = 264 feet
const FEET_PER_BLOCK = 264;
const HQ_BLOCK = 42;

function distanceFromHqInBlocks(block) {
  return Math.abs(block - HQ_BLOCK);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * FEET_PER_BLOCK;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * FEET_PER_BLOCK;
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end);
  
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
