const piece = 'King';

switch (piece.toLowerCase()){
    case 'pawn':
        console.log('Pawn: moves 1 space forward (2 on its first move), capture diagonally');
        break;
    case 'knight':
        console.log('Knight: moves in an L shape (2 + 1 spaces)');
        break;
    case 'bishop':
        console.log('Bishop: moves diagonally');
        break;
    case 'rook':
        console.log('Rook: moves in a straight line');
        break;
    case 'queen':
        console.log('Queen: moves both straight and diagonally');
        break;
    case 'king':
        console.log('King: moves 1 space in any direction');
        break;
    default:
        console.log("Invalid input");
        break;    
}







