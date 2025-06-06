import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VechilePanel from '../components/VechilePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const vechilePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const WaitingForDriverRef = useRef(null);

  const [vechilePanel, setVechilePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(function() {
    if (panelOpen) {
      gsap.to(panelRef.current, { height: '70%' });
      gsap.to(panelCloseRef.current, { opacity: 1 });
    } else {
      gsap.to(panelRef.current, { height: '0%' });
      gsap.to(panelCloseRef.current, { opacity: 0 });
    }
  }, [panelOpen]);

  useGSAP(function() {
    if (vechilePanel) {
      gsap.to(vechilePanelRef.current, { transform: 'translateY(0)' });
    } else {
      gsap.to(vechilePanelRef.current, { transform: 'translateY(100%)' });
    }
  }, [vechilePanel]);

  useGSAP(function() {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, { transform: 'translateY(0)' });
    } else {
      gsap.to(confirmRidePanelRef.current, { transform: 'translateY(100%)' });
    }
  }, [confirmRidePanel]);

  useGSAP(function() {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, { transform: 'translateY(0)' });
    } else {
      gsap.to(vehicleFoundRef.current, { transform: 'translateY(100%)' });
    }
  }, [vehicleFound]);

  useGSAP(function() {
    if (waitingForDriver) {
      gsap.to(WaitingForDriverRef.current, { transform: 'translateY(0)' });
    } else {
      gsap.to(WaitingForDriverRef.current, { transform: 'translateY(100%)' });
    }
  }, [waitingForDriver]);
  
  return (
    <div className="h-screen relative overflow-hidden">
      <img className="absolute top-4 left-4 w-16 md:w-24" src={logo} alt="logo" />
      <div className="h-screen w-screen">
        <img className="h-full w-full object-cover" src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="background gif" />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute opacity-0 right-6 top-6 text-2xl"
          >
            <i className="ri-arrow-down-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-2 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick up location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        <div ref={panelRef} className="bg-white h-0 overflow-hidden">
          <LocationSearchPanel panelOpen={panelOpen} setPanelOpen={setPanelOpen} setVechilePanel={setVechilePanel} />
        </div>
      </div>

      <div ref={vechilePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14">
        <VechilePanel setConfirmRidePanel={setConfirmRidePanel} setVechilePanel={setVechilePanel} />
      </div>

      <div ref={confirmRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel}
                     setVehicleFound={setVehicleFound}
                     setVechilePanel={setVechilePanel} />
      </div>

      <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
                <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={WaitingForDriverRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
                <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>

    </div>
  );
};

export default Home;