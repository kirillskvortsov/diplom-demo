const info = [
  {
    id: 3,
    alt: "suppliers",
    text: "Поставщики",
    anchor: "/SupplierCatalogPage",
    srcCard:
      "https://lh3.googleusercontent.com/rOjpQ-RFDlGojYS9MYw_sUwOQs9MjKwDuj1JuRh64-hH8FzWPKoYsSgXUXaySw3VqnUQVmSk-UCL42xM5xnejnva7ZG1sZ-WIf0_qyQPx_YwWMowF1yjp-ebLN7ZIB7FdCN1ral05X6_jzJVBeMqH2nohJRF--nbTyBtbPy5XbKe7VxgKVDtUh_qFT9xMINcBiN9HAN8XWFdTG7U4LjpIwGa5p-3mZAttB9N0qU6a5u8pkt-3NAkB5O8OZGUx1Rk5he5IQO4_gJ-huouE0cj-a96x3qJdRMwbp2eKXMxrX_jUsHAx2Fj92Mur-RPL2hhepb56DA4uO2Vu6kfRhf3oelABvSWvle6AedqTI1sN5A2CkKiLnhs0zClVkc0gKDI0LWAf2LJHLKVCGwVo3njsQTIIME9fHXKe2PdCpvBE9mT0JEDov7fV8LYvgeiubThG_gJDhQzBdlV6ewOW34WezqAN5D9xt46wnEmzRFJNI8gUcLH1aja9gD1IUdMnfWimg2m2hT5gj8BwK7oL4uG3PU3y_YbfAXdyhOT_gwfZhJM2RnIoAOZAgXi7pd2_0JUJ5wlNpRUCEQz0v94pN6MJnGi47_x3NWOrx3-SH4lJf8uGTX39DESu5DzSaasYlqNbYKGVAIHmW58ENcVTLMc1DeonYNdjI3eahk-9nG5J1sEvLkVmcKvMfTKTCjF=s512-no?authuser=0",
  },
  {
    id: 4,
    alt: "warehouse capacity",
    text: "Площади склада",
    anchor: "/WarehousePage",
    srcCard:
      "https://lh3.googleusercontent.com/ctFKsGVAehR89jTd8F-UtTqtTGfFFmc73quSRDptA0ujEFSw8W-elYYSs-LaaDL5ao_XN5q_j4-Ds1puzscNziHCiYDTtYGOxomxA74OOJFcIDYU9ROhDP3KjmwAx6kEyDFoqYuxlP4Bd79Hoclscj0y0U6uBM6vT-4sHiw976jrJz3AlsgURf7CoFcuY_RejKe1lHg_o9-SVI34WGT3SOF_h5fJIq_e2ugTsafn64Icnu8CPeIYZl6eMezAcY7I-pmGoW6yl8Nng4N7E4qjwOZmHGdp8OgLtsRClqd8mPa_f4feofqzG5PJWGS60UvG1BwO2UvYti04lDEBeXMfBEPkk6ygIarXlkDUVXW0EwbmuVQfbmVTNrGQt-_FiVwRs4wTcGx_i7uwQ0A1XcNJMH6PesGQrbltCiAVAH-SNwOV90Zst0JcglUSCjJ1hkidwNylVDoMfDfqqBBRbOFHPauwRaJvMZvX1O7HY_P6vPWhPt3DsxWn0pRKGrvvXNG0pIYfFTUjDFUCPfZheH9iV5C_gUPY35VhY83PVvtSLg5HWCL93D9-9Wi-dpEdqj2lJoGub9ifmavwgiI5aP0X5Yxo6bxfpoKCCIr_4VJsE4bWVROGVkXdXf0paeSKxRDVYKMcLy3zSUJNX8oezsBZ0fhpz1DFQXuHxzmeUnYCFlrpfLCmRCTUFiPfCwBH=s512-no?authuser=0",
  },
  {
    id: 5,
    alt: "point of order",
    text: "Частота пополнения склада",
    anchor: "/OrderPointPage",
    srcCard:
      "https://lh3.googleusercontent.com/9SH4NQ4RU62rdi0q8AykTy0CZIFmhR8jM4eiY9o8C3lU6201RzpNcA3uFXeFA0Pgybhf3vlGArsmm8_01v9QiHID76uoMkaMrT-mXfZXE0t7frKfUxd9BnsrQnCsUkhKz4wjnMqPXPvGIN1ePqDXfBjWtrgxMyxbJRGFfpr-dOOrVJXwd-ZMH75C8AOpHQUxYczTpUat-nnFrhNDeNkUaFIa3lkTQcxYrj7EvDXnId6mMvWyevsgC67glI2O1yq5tMB0pQk7qufnBowb4VO7HRvDCLuylAQlPhUtRFU_iOlp-SE8uB1iZs6tE4PgUR2xhpz-2Pfo-UmpEcg3VIhTt0M8iUMGNJF_a4ce9tvFZGDXKltbIQf7AvfzdUX205Zq8MkioBlksXn1SrR5L1gq1iGlORG49uA-jrbgBPstFL6QHTk1irgmuCY6SNDUIdp-Eeqo2phDP87e4gXwQTaPwWlO1qw3Shr-DF0U9I_B9rcQUAtT4HARDAMMeyLP7G5qHs_MeKx95P6n-p5nQrvjAhpLAxPTJ6cIHtnC_tteh24JrjAIp8IBsXhFXsy7aRONlvfVDkyZpcLOZc69D0-HXjsRNHmW47p9Qd3CeVuYO7zCBdS4qBWudinJjLCY9Dusq0Tvv_piNTe3bYo8SQnRtKp_UnLgEtOJ2xQKOeGrligfsqkPK9p-n3SRrKGh=s512-no?authuser=0",
  },
  {
    id: 6,
    alt: "demand prognosis",
    text: "Прогноз спроса",
    anchor: "/DemandPrognosisPage",
    srcCard:
      "https://lh3.googleusercontent.com/jbEM-7xJv4TSaThB2AMMmJViHCbGxK-cD88wt-z5rsTiiaFt9nLvlH5ELAPGV_kHUV1mI25osAvh3SxAtXh9tPUrrBq1aSHbBDSpa0vWmkT3L8UKd1pdcphcNu5NtVcDF1SpecjaPvqJ6HBV1tOsq9QuIIltBXDQkMnKOPI7X-yJzjw03-oQM9ppabHlIS_9hSl86I0jKP7i0YYmxUIUkk-3VoSKA6bnkcHWAe6B7d1-jyTA7wPDikV0H0QrfDkuBKE5ud1AxYy3bYrd89zBvwgrchle7uW7__53wEb6H-gtlvdgVLkiwA_1qrthwNuPCyab_T4CL7ryRsfUdAWGibqq9TstFLz7Rlf1en_FX8ow8rbMhTV9TL14UbSpFWrgqtdToj1vmJJRthpMX1IUQf2fqw-n-5kUkg99M3VN0dgvwd8kZr0tJc4nm8PI6IBgJ8B75bx635PIjWnQeDhscS_MWWUIM7dSF71uVzd5M6eVC0W5OZDCgDHDymzqujsYyO2aqLrJlsq7ns7MXoHdR1bbRGtd1PsAdI_K78IC0cohVg9ZchHHt3VRLusQnb8KnFWxreoG99Kgg0wA2sEAfT3VZzcNlsqpDTf4ONQIBrSC-gaIWTCBZYvV7Rolm1eKVYpXfN3b89vEkjDGjEK0ticljbpRI0I63SPKfHTkWVQGNPlIYih2TeyjSp--=s512-no?authuser=0",
  },
  {
    id: 7,
    alt: "car park structure",
    text: "Структура автопарка в регионе",
    anchor: "/CarParkPage",
    srcCard:
      "https://lh3.googleusercontent.com/8UJRcKrF4tv_XIXo-PllTcWCfES1nTCHtOTBhxgpMK9dPuEki1_GTdqpekyNQGpN6caYO7eHAUlmzzX9cD78s6VP4VqXOFT_akILL-sCERzFIHWjGBcEHt7x7wdSvhhYkK-nhslC9eea5CBzm79-Vg5EDS-LHoZhfQcGBQ3muZIIzNQ5shfN9shGWDIw7skz6nEyhbCa6jW8K-xFqXRTrlm0WCPqs-yc3h0rc9eMM8A1IL7_sAqZdVYsMlkPRsi3mHNtd4GvMb3JhXEuLYGgrWzjqt5DovFXHDZkhLq-LP3Lp9CLGQAe6bc8cppGf3Cfg0EfGOj0GE5Fb1cx7poVDVYiMvwaMMkphKjwwc22OT5ctircjnDEM05_wuCqIWtX7nSrDfLrC7mJFwXPAksSXaJvnkjfgVaOyiQ5TwQvAldjJ3VISCyHOkK5G9ajJNe-KwAhJmIS1I9QT0rC70ybK74ZFIhcFZNlglRtBXiuhjbJv4abRhBx7dXWV_P7Ps8cEnJnfDlg5bM5PH5oqYZOfcwnt_ba3vtOcadjwYkrcumeb0N046CGYGCBTQGWfoBgPbuC1UVwaHeZo9kof7-SEhoeQW1pGa4an89J219EOc4-GPharRIkPtFxVIlj1Fb2OYIeAHPNTZ_nvlfvGGE4htRtcWItiXFz14-zN4WTZBgr2tBX02zaoItGaP2g=s512-no?authuser=0",
  },
  {
    id: 8,
    alt: "season",
    text: "Сезонные коэффициенты",
    anchor: "/SeasonPage",
    srcCard:
      "https://lh3.googleusercontent.com/7ZVV16fySGLctJAq6ao-tXjZSstRs0JgCZpzdxZK1_dtSI3vtQMNP3fvY3skpHpz9hTr9ryfUMviThzEG2_S5hgaAPYD51eQXTXy3wl9NKZLbVCBdIAyGtVJaXuruh75keMgmTP2gHuj_hqNqDcN26kNDqjyQszLnszQcDCg_HvMq4jWM3WK2RhU6aEPnKc9J_CRKTkqe8DZO4pIuCKqxIfpx1m7ceNC3FDHq0vAhv4I0FlxVtoblSKuXcdacxZfp8keofVEa6-qb1ctXESSOxcvvWh5eCsl12eK72q7EtxfLZaMGOUwQvTMSaJylb6lidQQQVj3jn5VB03I9OzpytVDzGl_S-uE-O0FEBpNmcnnTHM9-ptNlmoxeyqOZEaYxo-JYs8E7wCyfFThqrW5ZDHtCRHX5SaqNy7bM33VKSKBf2QnxiPilwpnsoYAXcAjD1FCfHKcN5UvKYLS55Air_84U-8n8E5PmM9EAewxB_mamV1ZRGcDTI8k52qru5GAcTBwRvubO7d-S55pwzDXSD_2QKsdm2KJTbTkNiIAN0xJSgW1hk8vurR40JiHtFJOtfcT_iPsAgaLSu9zmBeioKVVR9wOEPAE57siRRqQZ44mT8gKCAe1GuecNreY1_3kXAmUHJKB4FIIqmuDXFLuq9LoSHQhDsPeM9_yVvoFwFDQcw5KMQELics-oHkQ=s512-no?authuser=0",
  },
];

export default info;
