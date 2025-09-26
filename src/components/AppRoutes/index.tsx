// ** react router
import {BrowserRouter as Router, Routes, Route} from "react-router";

// ** Configs
import {ROLE} from "@/configs/role.ts";

// ** Layout
import DefaultLayout from "@/layouts/DefaultLayout";
import AdminLayout from "@/layouts/AdminLayout";

// ** Components
import {ProtectedRoute} from "@/components/AppRoutes/protected.route.tsx";

// ** Admin Pages
import Dashboard from "@/pages/admin/dashboard";
import Dish from "@/pages/admin/dish";
import Menu from "@/pages/admin/menu";
// Service Page
import Service from "@/pages/admin/service";
import EditService from "@/pages/admin/service/edit";
import CreateService from "@/pages/admin/service/create";
import DetailService from "@/pages/admin/service/view";
// Room Page
import Room from "@/pages/admin/room";
import CreateRoom from "@/pages/admin/room/create";
import EditRoom from "@/pages/admin/room/edit";
// Venue
import Venue from "@/pages/admin/venue";
import DetailVenue from "@/pages/admin/venue/view";
import CreateVenue from "@/pages/admin/venue/create";
import EditVenue from "@/pages/admin/venue/edit";
// Event
import Event from "@/pages/admin/event";
import CreateEvent from "@/pages/admin/event/create";
import EditEvent from "@/pages/admin/event/edit";
import DetailEvent from "@/pages/admin/event/view";
// Booking
import Booking from "@/pages/admin/booking";

// ** Default Pages
import Home from "@/pages/client/Home";
import SignIn from "@/pages/auth/sign-in";
import SignUp from "@/pages/auth/sign-up";
import BookingClient from "@/pages/client/booking";
import EventClient from "@/pages/client/event";
// Menu
import MenuClient from "@/pages/client/menu";
import MenuEvent from "@/pages/client/menu-event";
// Venue
import VenueClient from "@/pages/client/venue";
import DetailVenueClient from "@/pages/client/venue/detail";

// Payment
import Payment from "@/pages/client/payment";
import PaymentSuccess from "@/pages/client/payment/success";
import PaymentFail from "@/pages/client/payment/fail";

import MyBookingDetail from "@/pages/client/my-booking";
import Profile from "@/pages/profile";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* Admin route */}
                <Route
                    element={
                        <ProtectedRoute roles={[ROLE.ADMIN]}>
                            <AdminLayout/>
                        </ProtectedRoute>
                    }
                >
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path='/dashboard/menu/dish' element={<Dish/>}/>
                    <Route path='/dashboard/menu' element={<Menu/>}/>

                    {/* Service */}
                    <Route path='/dashboard/service' element={<Service/>}/>
                    <Route path='/dashboard/service/view/:id' element={<DetailService/>}/>
                    <Route path='/dashboard/service/edit/:id' element={<EditService/>}/>
                    <Route path='/dashboard/service/create' element={<CreateService/>}/>

                    {/*  Venue  */}
                    <Route path='dashboard/venue' element={<Venue/>}/>
                    <Route path='dashboard/venue/create' element={<CreateVenue/>}/>
                    <Route path='dashboard/venue/edit/:slug' element={<EditVenue/>}/>
                    <Route path='dashboard/venue/view/:slug' element={<DetailVenue/>}/>

                    {/*  Room  */}
                    <Route path='dashboard/venue/room' element={<Room/>}/>
                    <Route path='/dashboard/venue/room/create' element={<CreateRoom/>}/>
                    <Route path='/dashboard/venue/room/edit/:id' element={<EditRoom/>}/>

                    {/*  Event */}
                    <Route path='dashboard/event' element={<Event/>}/>
                    <Route path='/dashboard/event/create' element={<CreateEvent/>}/>
                    <Route path='/dashboard/event/edit/:slug' element={<EditEvent/>}/>
                    <Route path='/dashboard/event/view/:slug' element={<DetailEvent/>}/>

                    {/* Booking */}
                    <Route path='/dashboard/booking' element={<Booking/>}/>
                </Route>
                {/* End Admin route */}

                {/* User route */}
                <Route
                    element={
                        <ProtectedRoute roles={[ROLE.USER]}>
                            <DefaultLayout/>
                        </ProtectedRoute>
                    }
                >
                    {/* Payment */}
                    <Route index path="/booking" element={<BookingClient/>}/>
                    <Route index path="/payment/return" element={<Payment/>}/>
                    <Route index path="/payment/success" element={<PaymentSuccess/>}/>
                    <Route index path="/payment/fail" element={<PaymentFail/>}/>

                    <Route index path="/my-booking/:id" element={<MyBookingDetail/>}/>

                    <Route index path="/profile" element={<Profile/>}/>
                </Route>
                {/* End User route */}

                {/*Public route*/}
                <Route element={<DefaultLayout/>}>
                    <Route index path="/" element={<Home/>}/>
                    <Route index path="/event/:slug" element={<EventClient/>}/>

                    {/* Menu */}
                    <Route index path="/menu" element={<MenuClient/>}/>
                    <Route index path="/menu/:slug" element={<MenuEvent/>}/>

                    {/* Venue */}
                    <Route index path="/venue" element={<VenueClient/>}/>
                    <Route index path="/venue/:slug" element={<DetailVenueClient/>}/>
                </Route>
                {/* End Public route */}

                {/* Auth Route*/}
                <Route
                    index
                    path="/sign-in"
                    element={
                        <ProtectedRoute guestOnly>
                            <SignIn/>
                        </ProtectedRoute>
                    }/>
                <Route
                    index
                    path="/sign-up"
                    element={
                        <ProtectedRoute guestOnly>
                            <SignUp/>
                        </ProtectedRoute>
                    }
                />
                {/* End Auth Route*/}
            </Routes>
        </Router>
    );
}

export default AppRoutes;