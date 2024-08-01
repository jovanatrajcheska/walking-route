# Walking Route 

A matrix path finding algorithm to traverse through a matrix-like structure and find a path from a start point **(>)** to an end point **(s)**.

## Installation

### Prerequisites

- Node.js
- npm (which comes with Node.js)

### Setup

1. Clone the repository

```
git clone https://github.com/jovanatrajcheska/walking-route.git 
cd walking-route
```

2. Install dependencies

```
npm install
```

### Running The Application

1. **Build the project**

Compile the **TypeScript** code to **JavaScript**:


```
npm run build
```

2. **Run the application**

Execute the compiled **JavaScript** code.
```
node dist/main.js
```

### Running Tests

```
npm test
```

## Understanding

### Test Case - Input 

```
>---A-@-+
        |
+-U-+   C
|   |   |
s   C---+
```

### Expected output

> Path @---A-@-+|C|+---C|+-U-+|s

> Letters ACCU

### How the code works

The `number of rows` is obtained from the *number of lines* in the input string and the `number of columns` depends on the *longest line* from the input string. 

The `findStartingPoint` method scans each cell of the matrix from top-left to bottom-right and locates the position of the starting point `>`.

The `findPath` method traverses the matrix, updating the path and letters strings while ensuring cells are not revisited. It stops if it reaches the ending point or cannot find a valid next move.

There are several helper methods as `checkBounds` which checks if the given row and column are within the matrix bounds. The `appendToPathString` appends characters to the path string and converts `>` to `@`. Similarly, `appendToLettersString` appends uppercase letters to the letters string. `moveToNextCoordinate` determines the next valid coordinate to move to based on the current position and available directions.