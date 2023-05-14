# Telepítés

-   Telepítsd a Node.js-t a számítógépedre a [Node.js hivatalos weboldaláról](https://nodejs.org/). Ajánlott a LTS (Long-Term Support) verzió letöltése.

-   A telepítést követően ellenőrzés céljából nyissunk egy powershell-t és adjuk ki a következő parancsot:

```shell
node --version
```

## Repository Klónozás

-   Klónozd le a repository-t hogy futtatni tudd a projektet.

```shell
git clone https://github.com/SMark2256/Interju_frontend.git
```

# Futtatás

## Build

-   A projekt mappájában már egy előre lebuildelt verziót is lehet találni, az egyszerűbb futattás érdekében.

-   Ehhez powershell segítségével a projekt mappájából adjuk ki a következő parancsot:

```shell
serve -s build
```

## npm start

-   npm csomagok telepítése: Powershell segítségével a projekt mappájában állva:

```shell
npm install
```

-   npm start: Powershell segítségével a projekt mappájában állva:

```shell
npm start
```

# Dokumentáció

## Api

### URL

```javascript
const BASE_URL = "https://crudcrud.com/api/3fff2f97513842bf933d7b0182bf3f90";
```

## Filmek lekérése

A `getMovies` végpont segítségével lekérhetjük az összes film adatait.

### Végpont

GET /movies

### Példa kód

```javascript
export const getMovies = () => {
    return axios.get(`${BASE_URL}/movies`);
};
```

## Film hozzáadása

A `postMovie` végpont segítségével új filmeket adhatunk hozzá.

### Végpont

```bash
POST /movies
```

### Paraméterek

-   `movie`: Az új film adatai.

### Példa kód

```javascript
export const postMovie = (movie) => {
    return axios.post(`${BASE_URL}/movies`, movie);
};
```

## Film törlése

A `deleteMovieById` végpont segítségével törölhetünk egy filmet az azonosítója alapján.

### Végpont

```bash
DELETE /movies/{id}
```

### Paraméterek

-   `id`: A törlendő film azonosítója.

### Példa kód

```javascript
export const deleteMovieById = (id) => {
    return axios.delete(`${BASE_URL}/movies/${id}`);
};
```

## Film frissitése

A `updateMovie` végpont segítségével frissíthetjük egy film adatait.

### Végpont

```bash
PUT /movies/{id}
```

### Paraméterek

-   `movie`: Az frissített film adatai.

-   A film objektumából eltávolítom az `_id` kulcsot, mivel az nem módosításható adat.

### Példa kód

```javascript
export const updateMovie = (movie) => {
    const details = { ...movie };
    delete details._id;

    return axios.put(`${BASE_URL}/movies/${movie._id}`, details);
};
```
