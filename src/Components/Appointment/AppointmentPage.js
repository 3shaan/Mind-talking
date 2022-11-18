import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AppointmentSelect from './AppointmentSelect';

const AppointmentPage = () => {
    const [selectedDate, SetSelectedDate] = useState(new Date());
    return (
      <div>
        <AppointmentBanner
          SetSelectedDate={SetSelectedDate}
          selectedDate={selectedDate}
        ></AppointmentBanner>
        <AppointmentSelect selectedDate={selectedDate}></AppointmentSelect>
      </div>
    );
};

export default AppointmentPage;