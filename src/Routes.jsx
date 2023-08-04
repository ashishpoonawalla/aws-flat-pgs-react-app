import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Terms from "pages/Terms/Terms";
import Signin from "pages/Signin/Signin";
import Signup from "pages/SignUp/Signup";
import ForgotPassword from "pages/ForgotPassword/ForgotPassword";
import NewPost from "pages/NewPost/NewPost";
import MyList from "pages/MyList/MyList";
import Message from "pages/Message/Message";
import Profile from "pages/Profile/Profile";
const License = React.lazy(() => import("pages/License"));
const PrivacyPolicy = React.lazy(() => import("pages/PrivacyPolicy"));
const FAQ = React.lazy(() => import("pages/FAQ"));
const Error = React.lazy(() => import("pages/Error"));
const BlogDetails = React.lazy(() => import("pages/BlogDetails"));
const BlogPage = React.lazy(() => import("pages/BlogPage"));
const ContactPage = React.lazy(() => import("pages/ContactPage"));
const AgentProfile = React.lazy(() => import("pages/AgentProfile"));
const AgentList = React.lazy(() => import("pages/AgentList"));
const PropertyDetails = React.lazy(() => import("pages/PropertyDetails"));
const ListingMapView = React.lazy(() => import("pages/ListingMapView"));
const Listing = React.lazy(() => import("pages/Listing"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Error />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/listing" element={<Listing />} />          
          <Route path="/propertydetails" element={<PropertyDetails />} />         
          <Route path="/contactpage" element={<ContactPage />} />        
          <Route path="/error" element={<Error />} />          
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />         
          <Route path="/terms" element={<Terms />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/newpost" element={<NewPost/>} />
          <Route path="/mylist" element={<MyList/>} />
          <Route path="/message" element={<Message/>} />
          <Route path="/profile" element={<Profile/>} />

          <Route path="/agentlist" element={<AgentList />} />

          {/* <Route path="/listingmapview" element={<ListingMapView />} />           
          <Route path="/agentlist" element={<AgentList />} />
          <Route path="/agentprofile" element={<AgentProfile />} /> 
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/blogdetails" element={<BlogDetails />} /> 
          <Route path="/faq" element={<FAQ />} /> 
          <Route path="/license" element={<License />} /> */}
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
