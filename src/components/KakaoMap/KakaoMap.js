/*global kakao*/
import React, { useEffect } from "react";
import styled from "styled-components";

const KakaoMap = (props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=5c8b46c9fb95f0c357280a31672c2ffe&autoload=false&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      kakao.maps.load(() => {
        var infowindow = new kakao.maps.InfoWindow({zIndex:1});
        let container = document.getElementById("Mymap");
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 3
        };
        // 지도 객체 생성 및 document에 bind
        const map = new window.kakao.maps.Map(container, options);
        // 키워드 장소검색 객체 생성
        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(props.keyword, placesSearchCB); 
        // 키워드 검색 완료 시 호출되는 콜백
        function placesSearchCB (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                var bounds = new kakao.maps.LatLngBounds();
                bounds.extend(new kakao.maps.LatLng(data[0].y, data[0].x));
                displayMarker(data[0]);
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds);
            } 
        }
        // 지도에 마커를 표시하는 함수입니다
        function displayMarker(place) {
            // 마커를 생성하고 지도에 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x) 
            });
            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function() {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
            });
        }
      });
    };
  }, []);
  
  return (<MapContents id="Mymap" />);
}

const MapContents = styled.div`
  width: 400px;
  height: 300px;
`;

export default KakaoMap;