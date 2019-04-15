const data = [
  {
    id: "1",
    name: "Permanent",
    level: 1,
    children: [
      {
        id: "A11",
        name: "Frigo",
        level: 2,
        children: [
          {
            id: "mpx_cat800015",
            name: "Chaussures",
            parent_id: "mpx_cat800004",
            type: "TEXTO",
            level: 3
          },
          {
            id: "mpx_cat800018",
            name: "Sacs, pochettes",
            parent_id: "mpx_cat800004",
            type: "TEXTO",
            level: 3
          },
          {
            id: "mpx_cat800016",
            name: "Echarpes, foulards",
            parent_id: "mpx_cat800004",
            type: "TEXTO",
            level: 3
          },
          {
            id: "mpx_cat800017",
            name: "Chapeaux, bonnets",
            parent_id: "mpx_cat800004",
            type: "TEXTO",
            level: 3
          },
          {
            id: "cat10059",
            name: "Gants",
            parent_id: "mpx_cat800004",
            type: "TEXTO",
            level: 3
          },
          {
            id: "mpx_cat800014",
            name: "Ceintures",
            parent_id: "mpx_cat800004",
            type: "TEXTO",
            level: 3
          },
          {
            id: "cat10061",
            name: "Lunettes de Soleil",
            parent_id: "mpx_cat800004",
            type: "TEXTO",
            level: 3
          },
          {
            id: "cat10058",
            name: "Parapluies",
            parent_id: "mpx_cat800004",
            type: "TEXTO",
            level: 3,
                        children: [
              {
                id: "mpx_cat800015eef",
                name: "ParapluiesFin",
                parent_id: "mpx_cat800004",
                type: "TEXTO",
                level: 4
              },
              {
                id: "mpx_cat800018eef",
                name: "ParapluiesFin2",
                parent_id: "mpx_cat800004",
                type: "TEXTO",
                level: 4
              }
            ]
          },
          {
            id: "cat1490008",
            name: "Bijoux",
            parent_id: "mpx_cat800004",
            type: "TEXTO",
            level: 3,
            children: [
              {
                id: "mpx_cat800015f",
                name: "Oyezfin",
                parent_id: "cat1490008",
                type: "TEXTO",
                level: 4
              },
              {
                id: "mpx_cat800018f",
                name: "Skynetin",
                parent_id: "cat1490008",
                type: "TEXTO",
                level: 4
              }
            ]
          }
        ]
      },
      {
        id: "A12",
        name: "SEC",
        level: 2,
        children: [
          {
            id: "mpx_cat800015",
            name: "Oyez",
            parent_id: "mpx_cat800004",
            type: "TEXTO",
            level: 3
          },
          {
            id: "mpx_cat800018",
            name: "Skynet",
            parent_id: "mpx_cat800004",
            type: "TEXTO",
            level: 3
          }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "Precommande",
    level: 1,
    children: [
      { id: "A21", name: "Toutes les promotion", level: 2 },
      { id: "A22", name: "Pâques : Notre sélection!", level: 2 }
    ]
  },
  {
    id: "3",
    name: "Promotion",
    directLink: true,
    level: 1
  },
  {
    id: "4",
    name: "Nouveautes",
    directLink: true,
    level: 1
  },
  {
    id: "5",
    name: "Mes favoris",
    directLink: true,
    level: 1
  },
  {
    id: "6",
    name: "Assortiment Simply",
    directLink: true,
    level: 1
  },
  {
    id: "7",
    name: "Selection ete",
    directLink: true,
    level: 1
  },
  {
    id: "8",
    name: "Saisir mes engagements",
    directLink: true,
    level: 1
  }
];

export default data;
