import React, { useState, useEffect } from 'react';
import addressData, { Address } from './data/addressData';
import './css/Location.scss';

declare global {
    interface Window {
        kakao: any;
    }
}

const Location = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredAddresses, setFilteredAddresses] = useState<Address[]>(addressData);
    const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=394545a6f3558d68fa0e20d6e0c58141&libraries=services';
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(37.5665, 126.978),
                level: 9,
            };
            const map = new window.kakao.maps.Map(container, options);

            filteredAddresses.forEach((address: Address) => {
                const geocoder = new window.kakao.maps.services.Geocoder();
                geocoder.addressSearch(address.address, (result: any, status: any) => {
                    if (status === window.kakao.maps.services.Status.OK) {
                        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

                        const marker = new window.kakao.maps.Marker({
                            map,
                            position: coords,
                            title: address.name,
                        });

                        window.kakao.maps.event.addListener(marker, 'click', () => {
                            setSelectedAddress(address);
                        });
                    }
                });
            });
        };

        return () => {
            document.head.removeChild(script);
        };
    }, [filteredAddresses]);

    const handleSearch = () => {
        const filtered = addressData.filter((address) => address.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredAddresses(filtered);
    };

    return (
        <section className="map-design">
            <div className="search-container">
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="검색어를 입력하세요" />
                <button onClick={handleSearch}>검색</button>
            </div>
            <div className="map-design-div" id="map" style={{ width: '80vw', height: '60vh' }} />
            {selectedAddress && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>{selectedAddress.name}</h3>
                        <p>주소: {selectedAddress.address}</p>
                        <button onClick={() => setSelectedAddress(null)}>닫기</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Location;
