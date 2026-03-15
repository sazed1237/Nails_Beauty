import Hero from '@/components/Reusable/Hero';
import React from 'react';
import ScheduleForm from '@/components/Reusable/ScheduleForm';

const ScheduleBooking = () => {
    return (
        <section>
            <Hero
                bg="/Images/booking/hero.png"
                title="Book your session"
                subtitle="Home/Schedule Booking"
            /> 
            <div className='py-35'>
                <ScheduleForm />
            </div>
        </section>
    );
};

export default ScheduleBooking;