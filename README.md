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

## Felhasznált npm csomagok

-   axios
-   tailwindcss
-   react-icons
-   framer-motion
-   sweetalert2

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

## Komponensek & Működés

### src/App.js

-   Egy useEffect-ben oldottam meg az összes film lekérését
-   Szerettem volna, hogy az oldal frissülésekor vagy a felhasználói műveletek során történjen csak egy új lekérés

#### Példa kód

```javascript
useEffect(() => {
    getMovies()
        .then((res) => {
            setMovies(res.data);
            setFilteredMovies(res.data);
        })
        .catch((err) => console.log(err));
    setRefresh(false);
}, [movies === null || refresh === true]);
```

### Komponensek & Működés

-   A legtöbb esetben törekedtem arra hogy a komponenseknek egy objektumban, átláthatóbb módon adjam át a szükséges változókat.

#### Példa kód

```javascript
//app.js line:11
const moviesObj = {
    movies,
    setMovies,
    sideBarOpen,
    setSelectedMovie,
    setAddMovieClicked,
    filteredMovies,
    setFilteredMovies,
};
//app.js line:83
<MovieListComp moviesObj={moviesObj} />;
```

### src/components/movies/list/movielistComp.jsx

-   A filmek listázásáért felelős komponenst úgy hoztam létre hogy egy fő `movielistComp.jsx`-ben történik, ezt egy mappeléssel valósítottam meg

#### Példa kód

```javascript
mappingMovies
    .slice()
    .reverse()
    .map((movie, index) => (
        <motion.li key={index} variants={item}>
            <ThumbCardComp
                movie={movie}
                setSelectedMovie={setSelectedMovie}
                key={index}
            />
        </motion.li>
    ));
```

#### Kártyák

-   A ki renderelt film listában két féle kártyával találkozunk, egy `thumbcardComp.jsx`-ben létrehozott kisebb kártyákkal és egy `detailscardComp.js`-ben létrehozott nagyobb és a film részleteit leíró kártyával

-   ThumbCardComp:

-   DetailsCardComp:

#### Szűrés

-   Létrehoztam a szűrés céljából egy `filteredMovies` tömböt.
-   Ezt a tömböt csak akkor töltöm fel tartalommal hogy ha a szűrés aktív.
-   Így a List

#### Példa kód

```javascript
useEffect(() => {
    if (filteredMovies != null) {
        setMappingMovies(filteredMovies);
    } else {
        setMappingMovies(movies);
    }
}, [filteredMovies, movies]);
```
