# ipcom-frontend-test

## Prueba frontend IPCOM
Esta aplicación cumple con los siguientes requerimientos:
Hacer una pagina que cargue en la primera pantalla  5 partidos aleatorios (utilice para la presentación el elemento thumbnail). 
Debe tener un menú (puede ser un select o un link) donde aparezcan listadas todas las ligas (elemento competition del JSON). 
Al seleccionar la liga debe mostrar los thumbnails de los partidos de esa liga. Tanto en la pagina principal como en cualquiera de las secundarias al darle click al thumbnail debe mostrar el video utilizando el elemento embed del JSON.  
Hacer un menú para los equipos también donde cuando se seleccione un equipo muestre solo los partidos del mismo.

Se pueden utilizar los select en el área superior para seleccionar una liga o equipo y filtrar los resultados mostrados, tambien se puede dar click al texto 'ScoreBatViewer' para regresar al homepage.

Para desplegar es necesario clonar el repositorio y ejecutar npm run serve o build.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
