const info = [
  {
    id: 1,
    alt: "home",
    text: "Домой",
    src: "assets/home.png",
    anchor: "/",
    srcCard: "",
  },
  {
    id: 2,
    alt: "search",
    text: "Поиск",
    src: "assets/search.png",
    anchor: "/SearchPage",
    srcCard:
      "https://lh3.googleusercontent.com/Gn70MFww_Veo0heLQG1mOjn-xpz3aEyQJdcVTELbobG5wD0wcZk2sPmR8PhAbp-lVE21DaTtBWrWCfRFLZ_XsAdZSzxM6myUYqjspg06I69rA-EVMmu531KFatm25_Y2yVoqlbkj1wjx6PBJCtpqYgHFzuVseXbXQH_7yL7N0fagUZK0ltUeqfHb7D7PswHwc404ArETutHWAxnJDP_RMe1_FR546fOYlaTdwIxMAFUuSkwEePrv_y4nN5PZ2xV_exeaBj27G5eWJiHiCR_wF9cTDIif0UihNgc_aLqMYreeHLFOFQFOQ8RO-qaxc-nnfKe6Moenj1ef_cACgcdBOkai6UpSZp-TvTtFXF2hd1Dnc2tSrSwRzQH3gUzcvXnYogXz41ZzTCyM_psybm3MZOFt2c2cai2CJSZl29Xkr7vdxWTVouSRqE7UBYTJwJxGyhmG8zlrnxOCHGLTf841EH-oddrjUaSs5x3kZ1D8yBa7eQ2Ww7FM4TRvdpLgcunAJ-XYTCeM6guvH61N8CeBM41mGa6VfPBbVozUaMP8A-7E3e7-lrnt8T4JYYx0XgCHHW99RWl3Nhawfc5oMP1Zve8iMrnb1Cc8kXm-iUX-yRMeypwwDCkUL2H_BC52J2AHujmD6AIayZbf4lXUQxVQEBRFqEX5ExWpmis74SmkBvvjfbA2Jh3FXbJ5X2Hh=w1792-h937-no?authuser=0",
  },
  {
    id: 3,
    alt: "rush",
    text: "Срочные заказы",
    src: "assets/timer.png",
    anchor: "/RushPage",
    srcCard:
      "https://lh3.googleusercontent.com/inMxQINe8KHwix5inDLmWELCcs-CWmE-QfsW2dGOmaUdQXcRKknH0btbGzn-LGrf8irUnPSoY4B6T_rvD-CO1G1lHQbtAiWXsRvRmmV-Gmiw8JDS__7_7N9gIYA0ReM9j9uLyDpUHgw-RHodJpLF3ewdCQYUoRCYa0jzP2zVwwr960jCk2qS5sQRXJtjrow9xoxIHrF2LOMJwEfPA5N9hCJKDBwZcbk4vJWblvx85etcl352W2BIGvtxyZ92M9PazqJ9T7GXUj9tVQJ6ysF-8BHQd-MjGFhCDRyHPAn7U6qxTNTRSB0UXKQEEs9JPQUuPF4dmP2HmRm8YErLbHAplyyxQpiSlfYPOsbg1uiG04BUB_TJ9ZBrCxe8y9myKbjRdAcKVZASNTWuoLD-7eTVfuVDsJ8HiA6QJMxrnh-gjzDJh_-5vShhPnTztZxfmW9HnpZR4WkcVM2TYYtxzMxk-m0PapGF365XATBJUKaLMyGHoYaX3zzjIjV7X5zIS39eayZl7SY1APcivfWtjziF2EEg7Dp8yPxlxwhEpj9I92-94DRadeNESPFn14yA9nkQGXMyX665-LKDQvr_vVhnk3hFSjo6_Qldxkhh-lEe6-3G-gv2AmbBbJ5pNC7Y9lroAqvB6KRAIn0tqvV5Dtjx8ym6zLeOoXsSoEnpYuq2WDRsO_u-7DS6EkrQbSnA=w1792-h938-no?authuser=0https://photos.google.com/album/AF1QipOivYsZfLUal3NK694DTBVx98ZKSqXAfkW416rv/photo/AF1QipP253WAtYx4LhxeSY2LVjRRB8Y5FdBxKzgoSUHH",
  },
  {
    id: 4,
    alt: "plan",
    text: "Плановые заказы",
    src: "assets/plan.png",
    anchor: "/PlanPage",
    srcCard:
      "https://lh3.googleusercontent.com/SZcDT2Cps-CteBsHjIrsg9LUFr1ybfx0Z-_w8Dhma3vPOpRLFp0m8cI28fyPJcKzXFQwiaRkYhKNNqX9pP-T8V121o4tXsC_yV-nadNfJW_BjG6JlO91-f5G2u4UupDSMCu5d3Rv_wL5sYiHzZxKrQVJheDZ1uMDOWEru4dK7W8IzXOGlEuXzjDWCwECHo_RraE3Zb_lCBDyc6u9Zkck-ebvusnIL8auRcUzferBtca1JC53Fbw8YXhLXJjxvyM9v39u1kqe0bB5epOxSZkpeBKvEVdwAyL-IsiflsbzzgjSDVA9RbONTDDQQBRPblQpAOL8Zt1XI7xwU0kb6_V7dWVkmWNVOc2jmlksJcCF1_z8R8-KgEhKXUJCsgYcwzG9rd3ZabZ09Bq2IAJ9AH__dIaaEhoxKelhNgOgAs01poMIgXz6zSNeCXbzlaGWOm8qOQq6Up0e-lNmAo5JaOrbJZs4Mv4DqiT0KxWPjXPCGX3cFigKN51D5fdt2xlzTOTeAdnKYJK-T-As96Br8HDIEyNjyEptjgpI5fQZb0Dgwt-RJjyBdACXckWm1-zK5QO1KTSZPfk5XqVZQXZlxvENGAjGffnUY166LbIDHcVDWNMRdnd5I4r4_SvgORnTQDcbF8zIyOtmke4ZDOJ2Cvn5I8azgUSg4crSjR5OPDjrOtVmSH89yu4g4KVpbnWD=w1792-h937-no?authuser=0",
  },
  {
    id: 5,
    alt: "supplier",
    text: "Заказы поставщику",
    src: "assets/delivery.png",
    anchor: "/SupplierPage",
    srcCard:
      "https://lh3.googleusercontent.com/VCZ7FykS9_oPEaYMHHzNDvL6oqeKJFL419Y076CjMp5ijWLGV47qExYp2Zj02UNuBPqoqxBfHgspWCBKW6cfIk5koWjBEs8h2tGmP6OE7fOvE3SHOW2gwXs8fE6715BFUIX6iueGK5DOB-odJYpyNPp6KmK11qdUDzjjgZdqB4k8FzhmRYYusX2F0motnon9BwVxjDdIJQwuduRYlqTHVRf-Srjl67BgRRn_fExaqptBkkyUu_BTyGGf-BmVbiSSa_-exjfNC2-ljwOgA8BmSO42LIJMsL8OOwnvMtcgvcVtDr9forpjrV_RpCdvMULAEJLVWmDIuaeaPPnosrcPb_RQpM43b2OWSYFpSeNYLQZIQhux_vXjQSfgcpU4YdTdII8db6qjt3C9L8hQD4ngqqQprtC5uDKZ-x0bAiT_BcVOTP8xIpDQ_ToKzZxiuIIFvocLQIZoeLXvx-zsGkISFakc7ON-InPgTAeXTIFfQoX4jszA8JrnZxzcPS7JOzIHfpfmWnmtnzcfi2n2dd2XXI56pD0MjIgouvkD80vta_LVa4r8pBZ-d9FSJHIwU1OLMj67ymbN_49h3x39SySRWKimzIkItFATEv94D9yTdem5P1Alh1oLWOs8q5iB0gzcVFKJNxL7BSkDITOttre7n1NIEDj9zeYfMN3MwodKhZia7XqXIYA6oMrPbkOh=w1792-h937-no?authuser=0",
  },
  {
    id: 6,
    alt: "incoming",
    text: "Приходные накладные",
    src: "assets/incoming.png",
    anchor: "/IncomingPage",
    srcCard:
      "https://lh3.googleusercontent.com/_hUF5MNPHQBMZcCZtBku9QpJq1-xVpHL4O6Y2fV-1bEF6SyApiuYNbX3tMIWNPUMPH8SxlP5TtfGGeJ8xmPCdlPY728NRL_ijPGxjaYWJrsfiwgLdsPq372D3p0BXVxHJijYGsD9uESJgUEa9pHS5I95LnAeiJU02mOQDfOMa3IJmsCk-deEzRFB6jCBi2UBlfk62JuTiuWrOvYw1yeSkS7ynluxeIO1oSRn2R5fJm6zcJfHgeZzItQhix_kMMNnNcemH7BG8n75qAz6zw2-YiqLrb8F6xvVyEEx5hMAylN39fO0qXrMmZB6fRPx_yP8YpRP7fBoUfgsSB0fhDzmx6UXURgdMG_0yZsuZwfs6ddWlEIaLep5DjyjWI48lpM7L4BnfTIxJ93UbzKITJoJQshbN7MP5on-Q9PIHjRzgtW_zCVl_azD8seQv7dymJyzf44qxUFgU_9KmScTJsZ_Oq7PlxFswS8NvdEnHAKo8BTtEuceyYAWFF2KcNEI65xl2PoRNulDBO5ygacsCH7L5u_vK499ZAFgzxjMVFfYsGwMbxNhWnet85_7WW1sEbk6hmdiwCLCt6T0YDbobdFl5n3Ylqpx5emywOf-uzQSaVh4G-U2knyCTKPFl-CZrIIuPCsMb0oZpiTpJefQgvDNxNeeErrTgbbUzXsYlWKv_CjRAFIjErdP4IykC673=w1793-h936-no?authuser=0",
  },
  {
    id: 7,
    alt: "analytics",
    text: "Аналитика",
    src: "assets/chart.png",
    anchor: "/AnalyticsPage",
    srcCard:
      "https://lh3.googleusercontent.com/EhxIftutRmqbUCLFd9-P4GeuhUQYFAMIV-Lg6ygymKil7z9Aprb9gT09Q08vU8QOX3Z-WXAfzYizUDBt4OW1NFyAfetUBpmS1tpwRo_vKsfYKxM3x1GhATCU-b_Ufn1A_shlwIVk764z6jTAxbO-pTKiKnEAITTeubo5RFm_RcVd2UOT63Mejb-x--EmPQl8uCwUBrkl7N4fNSQZtlR8tbtGaSCC8tMfVv7PewGAdAEPJfnBAhp_1fHh1Nz9lEHBvU7LwMC2kU6Ygu20naFjGNdHQkZMukfU1KqqakMi8swpEioDy9JZAXcae9Gp72dszAnhyY_r8e8jL83uJZ0qNTZFIZR1FY2gO0wRvdRijQrZgl1wCUGxEoh01c6JrZv3grLbIYdz5GwZZaYn7qmstSRfmBOdHTia0fdrONpTh4Y3PvRNgCPVm9zcOOUCqdNQfKAcaFv0wXcNsNkLwdMyT1MztcdrQhu9hD3xj92FMzqGQMBuVa6VMbZrxq1dzC2QTzYH5smW2A2_aJ7uaaVHXl6uzhfR1OZ1WsbjXtnPSkfWd9VnWXaedre48JCURjJQqmVp9bN7DgE7pqg4HNw-umwWVAmM98E3s0mGrqiI3Uv3S390491nVhnpFTbP2KOLNsv-_jvlo8WEX4aoayvboRvcj-3_HqFLcqWhFr6Wz1fCzmIwApHhm39RwRla=w1920-h938-no?authuser=0",
  },
];

export default info;
