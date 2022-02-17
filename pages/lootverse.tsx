import React, { useState, useCallback, useEffect } from "react";
import DeckGL from "@deck.gl/react";
import { ScatterplotLayer, IconLayer, PolygonLayer } from "@deck.gl/layers";
import { FlyToInterpolator, PointLight, LightingEffect } from "@deck.gl/core";
import { StaticMap } from "react-map-gl";
import Layout from "~/components/Layout";
import { Realm as RealmCard } from "~/components/realms/Realm";
import { ResourceSideBar } from "~/components/map/ResourceSideBar";
import { useQuery } from "@apollo/client";
import { Data, Realm } from "~/types";
import { getRealmQuery } from "~/hooks/graphql/queries";
import { useUIContext } from "~/hooks/useUIContext";
import Menu from "../public/svg/menu.svg";
import { Header } from "~/components/navigation/header";
import { MenuSideBar } from "~/components/map/MenuSideBar";
import { TheOrdersSideBar } from "~/components/map/TheOrdersSideBar";

import realms from "../src/realms.json";
import order_highlights from "../src/order_highlights.json";

function App() {
  const {
    mapMenu,
    toggleMapMenu,
    toggleTheOrdersMenu,
    theOrdersMenu,
    closeAll,
  } = useUIContext();
  const [resource, setResource] = useState<Array<String>>([]);
  const [value, setValue] = useState<number>(1);

  // const filteredContinents = () => {
  //   let c = order_highlights.features.filter(
  //     (a) => a.properties.order_idx === 9
  //   );
  //   console.log(c);
  //   return c;
  // };
  // const continent_layer = new PolygonLayer({
  //   id: "polygon-layer",
  //   data: filteredContinents(),
  //   stroked: true,
  //   filled: true,
  //   lineWidthMinPixels: 1,
  //   extruded: true,
  //   getPolygon: (d: any) => d.geometry.coordinates,
  //   getElevation: 1000,
  //   getFillColor: (d: any) => d.color,
  //   getLineColor: [141, 121, 91],
  //   getLineWidth: 4,
  //   onClick: (info: any) => {
  //     console.log(info.object.properties.order_idx);
  //     // setValue(info.object.properties.order_idx);
  //     // if (!mapMenu) {
  //     //   toggleMapMenu();
  //     // }
  //   },
  // });

  const filteredData = () => {
    /* @ts-ignore: name not exist on D */
    return realms.features.filter((a: any) =>
      a.properties.resources.some((b: any) => resource.includes(b))
    );
  };

  const addToFilter = (value: any) => {
    const idx = resource.indexOf(value);
    if (idx === -1) {
      return setResource((oldArray) => [value, ...oldArray]);
    } else {
      const temp = [...resource];
      temp.splice(idx, 1);
      return setResource(temp);
    }
  };

  const realms_layer = new ScatterplotLayer({
    id: "scatterplot-layer",
    /* @ts-ignore: name not exist on D */
    data: realms.features,
    stroked: true,
    filled: true,
    extruded: true,
    pickable: true,
    pickingRadius: 10000,
    opacity: 1,
    getPosition: (d: any) => d.geometry.coordinates,
    getRadius: 1000,
    getElevation: 10000,
    lineWidthMinPixels: 1,
    getFillColor: [0, 0, 0],
    onClick: (info: any) => {
      setValue(info.object.properties.realm_idx);
      if (!mapMenu) {
        toggleMapMenu();
      }
    },
  });

  const ICON_MAPPING = {
    marker: { x: 0, y: 0, width: 128, height: 128, mask: true },
  };

  const resource_layer = new IconLayer({
    id: "icon-layer",
    data: filteredData(),
    pickable: true,
    iconAtlas:
      "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png",
    iconMapping: ICON_MAPPING,
    getIcon: (d) => "marker",
    sizeScale: 5,
    getPosition: (d: any) => d.geometry.coordinates,
    getSize: (d) => 5,
    getColor: (d: any) => [255, 255, 255],
  });

  const [initialViewState, setInitialViewState] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 4,
    pitch: 55,
    bearing: 0,
  });

  const goToId = useCallback((id: any) => {
    toggleMapMenu();
    /* @ts-ignore: name not exist on D */
    let realm = realms.features.filter(
      (a: any) => a.properties.realm_idx === id
    );

    setValue(id);

    setInitialViewState({
      longitude: realm[0].geometry.coordinates[0],
      latitude: realm[0].geometry.coordinates[1],
      zoom: 8,
      pitch: 20,
      bearing: 0,

      // @ts-ignore: Unreachable code error
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
    });
  }, []);

  const onChange = (event: any) => {
    if (parseInt(event.target.value) < 1) {
      setValue(1);
    } else if (parseInt(event.target.value) > 8000) {
      setValue(8000);
    } else {
      setValue(parseInt(event.target.value));
    }
  };

  const { loading, error, data } = useQuery<Data>(getRealmQuery, {
    variables: { id: value.toString() },
  });

  return (
    <Layout>
      <div>
        <h1 className="text-6xl top-0 absolute z-10 w-full text-center pt-8">
          Lootverse
        </h1>
        <Header />
        <MenuSideBar />
        <TheOrdersSideBar onClick={goToId} />
        <ResourceSideBar onClick={addToFilter} resource={resource} />
        <div className="flex absolute top-10 right-36 z-30 w-96 text-xl">
          <input
            placeholder="Type Id"
            type={"number"}
            className="text-black px-4 py-4 rounded-l-xl w-1/2 bg-white/80"
            value={value}
            onChange={onChange}
            min="1"
            max="8000"
          />
          <button
            className="p-1 px-4  text-off-100 mr-2 bg-off-200/20 transition-all duration-300 rounded-r-xl w-1/2 uppercase "
            onClick={() => goToId(value)}
          >
            Fly to realm
          </button>
        </div>
        <div
          className={`h-screen w-full sm:w-1/2 z-20 absolute p-6 pt-10 bottom-0 overflow-auto backdrop-blur-md bg-off-200/20 rounded-r-2xl transform duration-300 transition-all right-0  ${
            mapMenu ? "" : "translate-x-full hidden"
          }`}
        >
          <button
            className="p-4 bg-white/20 transition-all p-4 z-10 rounded hover:bg-white/70"
            onClick={toggleMapMenu}
          >
            <Menu />
          </button>
          <h3 className="mt-4 mb-2">Search For a Realm</h3>

          <RealmCard data={data!} loading={loading} />
        </div>
        <DeckGL
          getCursor={() => "crosshair"}
          initialViewState={initialViewState}
          controller={true}
          layers={[realms_layer, resource_layer]}
          getTooltip={({ object }) =>
            object && {
              // @ts-ignore: name not exist on D
              html: `<div class=" w-96 text-center"> <img class="w-96" src="https://d23fdhqc1jb9no.cloudfront.net/_Renders/${object.properties.realm_idx}.jpg"/><div><h2>${object.properties.name}</h2></div></div>  
      `,
              style: {
                backgroundColor: "black",
                fontSize: "0.8em",
                borderRadius: "10px",
              },
            }
          }
        >
          <StaticMap
            mapStyle="mapbox://styles/ponderingdemocritus/ckzjumbjo000914ogvsqzcjd2"
            mapboxApiAccessToken={
              "pk.eyJ1IjoicG9uZGVyaW5nZGVtb2NyaXR1cyIsImEiOiJja3l0eGF6aXYwYmd4Mm5yejN5c2plaWR4In0.4ZTsKDrs0T8OTkbByUIo1A"
            }
          />
        </DeckGL>
      </div>
    </Layout>
  );
}

export default App;