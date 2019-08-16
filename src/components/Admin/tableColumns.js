import React from "react";

const tableColumns = (view) => {
    return [
        {
            id: "Username",
            columnId: "Username",
            title: "Username",
            accessor: "username",
            show: view === "Users",
        },
        {
            id: "Password",
            columnId: "Password",
            title: "Password",
            accessor: "password",
            show: view === "Users",
        },
        {
            id: "firstName",
            columnId: "firstName",
            title: "First Name",
            accessor: "firstName",
            show: view === "Users",
        },
        {
            id: "lastName",
            columnId: "lastName",
            title: "Last Name",
            accessor: "lastName",
            show: view === "Users",
        },
        {
            id: "dateOfBirth",
            columnId: "dateOfBirth",
            title: "DOB",
            accessor: "dateOfBirth",
            show: view === "Users",
        },
        {
            id: "inGameName",
            columnId: "inGameName",
            title: "IGN",
            accessor: "inGameName",
            show: view === "Users",
        },
        {
            id: "name",
            columnId: "name",
            title: "Gun Name",
            accessor: "name",
            show: view === "Guns",
        },
        {
            id: "ammoType",
            columnId: "ammoType",
            title: "Ammo Type",
            accessor: "ammoType",
            show: view === "Guns",
        },
        {
            id: "magazineOptions",
            columnId: "magazineOptions",
            title: "Mag Options",
            accessor: "magazineOptions",
            show: view === "Guns",
        },
        {
            id: "price",
            columnId: "price",
            title: "Price",
            accessor: "price",
            show: view === "Guns",
        },
        {
            id: "ammoName",
            columnId: "ammoName",
            title: "Name",
            accessor: "name",
            show: view === "Ammo",
        },
        {
            id: "ammoSize",
            columnId: "ammoSize",
            title: "Size",
            Cell: row => (
                <span>{`${row.original.length}x${row.original.width}`}</span>
            ),
            show: view === "Ammo",
        },
        {
            id: "usedBy",
            columnId: "usedBy",
            title: "Used By",
            accessor: "usedBy",
            show: view === "Ammo",
        },
        {
            id: "damage",
            columnId: "damage",
            title: "Dmg",
            accessor: "damage",
            show: view === "Ammo",
        },
        {
            id: "armorPen",
            columnId: "armorPen",
            title: "ArPen",
            accessor: "armorPen",
            show: view === "Ammo",
        },
        {
            id: "armorDamage",
            columnId: "armorDamage",
            title: "Armor Damage",
            accessor: "armorDamage",
            show: view === "Ammo",
        },
        {
            id: "fragmentationChance",
            columnId: "fragmentationChance",
            title: "Frag %",
            accessor: "fragmentationChance",
            show: view === "Ammo",
        },
        {
            id: "ricochetChance",
            columnId: "ricochetChance",
            title: "Ricochet %",
            accessor: "ricochetChance",
            show: view === "Ammo",
        },
        {
            id: "projectileSpeed",
            columnId: "projectileSpeed",
            title: "Speed",
            accessor: "projectileSpeed",
            show: view === "Ammo",
        },
        {
            id: "specialEffects",
            columnId: "specialEffects",
            title: "Special",
            accessor: "specialEffects",
            show: view === "Ammo",
        },
        {
            id: "soldByVendor",
            columnId: "soldByVendor",
            title: "Sold By",
            accessor: "soldByVendor",
            show: view === "Ammo",
        },
        {
            id: "soldByVendorRank",
            columnId: "soldByVendorRank",
            title: "LL",
            accessor: "soldByVendorRank",
            show: view === "Ammo",
        },
        {
            columnId: "moreOptions",
            title: "moreOptions",
            show: true,
            accessor: "moreOptions",
            id: "moreOptions",
            sortable: false,
            Cell: row => {
                return (
                    <div>temp</div>
                );
            },
            width: 50,
            resizable: false,
            filterable: false,
            hideFromAdvancedOptions: true,
        },
    ];
};

export default tableColumns;