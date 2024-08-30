import { Logo } from "./Logo";
import React from "react";
import { SidebarItem } from "./SidebarItem";
import { Footer } from "./Footer";

const sidebarItems = [
  {
    id: "5f0233b9-48dc-4099-abbd-817d31006c57",
    segment: "overview",
    groupName: "Overview",
    items: [
      {
        id: "f493e5d6-243e-4892-a218-16580b8e0860",
        segment: "__DEFAULT__",
        title: "Dashboard",
        href: "/",
        iconClass: "flaticon-layers flat-mini",
      },
      {
        id: "a9dadec3-c455-4d79-9c25-5020632c2706",
        segment: "dashboard-message",
        title: "Message",
        href: "/dashboard-message",
        iconClass: "flaticon-email flat-mini",
      },
    ],
  },

  {
    id: "c4ea1546-d612-44a9-ab40-74351263d361",
    segment: "manage-listing",
    groupName: "Manage Listing",
    items: [
      {
        id: "012eedfc-9823-4207-b391-143580cdb66f",
        segment: "",
        title: "My Properties",
        href: "#",
        iconClass: "flaticon-home flat-mini",
        subMenus: [
          {
            id: "2bee7314-e544-484f-8ac6-32dcf64fa95b",
            segment: "dashboard-listing",
            title: "General Listing",
            href: "/dashboard-listing",
          },
          {
            id: "8f0f024c-2c6a-4cdf-b8ea-106c1c9de1c0",
            segment: "element-listing",
            title: "Element Listing",
            href: "/dashboard-listing",
          },
          {
            id: "017f3804-2997-4d19-9ec9-8bd7023a985f",
            segment: "Management",
            title: "Management",
            href: "/dashboard-listing",
          },
        ],
      },
      {
        id: "beb04370-89f7-472f-95bb-560892ae3ca9",
        segment: "dashboard-favorite",
        title: "My Favorite",
        href: "/dashboard-favorite",
        iconClass: "flaticon-like-1 flat-mini",
      },
      {
        id: "c1e51d01-27a4-4cc8-ada6-5aba0e5b225b",
        segment: "dashboard-submit-property",
        title: "Submit Property",
        href: "/dashboard-submit-property",
        iconClass: "flaticon-arrow flat-mini",
      },

      {
        id: "65cd0002-42d6-4712-b350-089950b82e99",
        segment: "",
        title: "Reviews",
        href: "#",
        iconClass: "flaticon-chat-1 flat-mini",
        subMenus: [
          {
            id: "16a6f67e-0e62-411a-a9b2-956554ecfadd",
            segment: "customer-reviews",
            title: "Customer Reviews",
            href: "/",
          },
          {
            id: "7d4a0187-0344-4fac-830f-295e715a8d6a",
            segment: "public-reviews",
            title: "Public Reviews",
            href: "/",
          },
        ],
      },
    ],
  },

  {
    id: "e1c285b5-98fd-4c5c-9a8b-0ca4eab6540d",
    segment: "account-settings",
    groupName: "Account Settings",
    items: [
      {
        id: "b68f8ad0-83d0-4a77-8807-c0485936dbc9",
        segment: "dashboard-profile",
        title: "Personal Profile",
        href: "/dashboard-profile",
        iconClass: "flaticon-user flat-mini",
      },
      {
        id: "37749ca4-eeb1-4a96-bc5c-66e105730dc2",
        segment: "dashboard-agency-profile",
        title: "Agency Profile",
        href: "/dashboard-agency-profile",
        iconClass: "flaticon-survey flat-mini",
      },
      {
        id: "ff56e0f4-b06a-4153-b6ce-4254cd23a0b4",
        segment: "dashboard-profile-settings",
        title: "Profile Settings",
        href: "/dashboard-profile-settings",
        iconClass: "flaticon-gear flat-mini",
      },
      {
        id: "b08a47d3-bbd3-47c2-8410-aca807056d8f",
        segment: "dashboard-change-password",
        title: "Change Password",
        href: "/dashboard-change-password",
        iconClass: "flaticon-gear flat-mini",
      },
      {
        id: "d559cb55-5145-4448-be82-67c3f10b8566",
        segment: "#",
        title: "Logout",
        href: "/logout",
        iconClass: "flaticon-transfer flat-mini",
      },
    ],
  },
];

export function Sidebar() {
  return (
    <div className="col-md-4 col-lg-3 col-xl-2 px-0">
      <div className="dashboard-nav-area bg-secondary">
        <Logo />
        <div className="collaps-dashboard m-3 px-3 rounded bg-white text-secondary clearfix d-md-none">
          <span>Open Dashboard Navigation</span>
          <span className="flaticon-menu text-secondary flat-mini float-end" />
        </div>

        <nav
          className="dashboard-nav nav-light pb-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav left-collaps-nav">
            {sidebarItems.map((sidebar) => (
              <React.Fragment key={sidebar.id}>
                <li className="text-white pb-2 pt-4 px-20">
                  {sidebar.groupName}
                </li>
                {sidebar.items.map((item) => (
                  <SidebarItem key={item.id} {...item} />
                ))}
              </React.Fragment>
            ))}
          </ul>
        </nav>

        <Footer />
      </div>
    </div>
  );
}
