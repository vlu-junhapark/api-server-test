class MessageHandler {

  static convertProductToDataSet(product) {
    const {
      shop_no,
      product_no,
      product_code,
      custom_product_code,
      product_name,
      eng_product_name,
      supply_product_name,
      internal_product_name,
      model_name,
      price,
      retail_price,
      supply_price,
      display,
      selling,
      product_condition,
      product_used_month,
      summary_description,
      product_tag,
      margin_rate,
      tax_type,
      tax_amount,
      price_content,
      buy_limit_by_product,
      buy_limit_type,
      buy_group_list,
      repurchase_restriction,
      single_purchase_restriction,
      buy_unit_type,
      buy_unit,
      order_quantity_limit_type,
      minimum_quantity,
      maximum_quantity,
      points_by_product,
      points_setting_by_payment,
      // points_amount,
      except_member_points,
      product_volume : {
        use_product_volume,
        product_width,
        product_height,
        product_length,
      },
      adult_certification,
      detail_image,
      list_image,
      tiny_image,
      small_image,
      has_option,
      option_type,
      use_naverpay,
      naverpay_type,
      manufacturer_code,
      trend_code,
      brand_code,
      supplier_code,
      made_date,
      // release_date,
      expiration_date : {
        start_date: exp_start_date,
        end_date: exp_end_date,
      },
      origin_classification,
      origin_place_no,
      origin_place_value,
      made_in_code,
      // icon_show_period,
      // icon,
      hscode,
      product_weight,
      product_material,
      created_date,
      updated_date,
      english_product_material,
      cloth_fabric,
      // list_icon,
      select_one_by_option,
      approve_status,
      classification_code,
      sold_out,
      additional_price,
      // discountprice,
      // decorationimages,
      // benefits,
      // options,
      // variants,
      clearance_category_eng,
      clearance_category_kor,
      clearance_category_code,
      // additionalimages,
      exposure_limit_type,
      // exposure_group_list,
      set_product_type,
      // memos,
      // hits,
      // seo,
      // category,
      // project_no,
      // description,
      // mobile_description,
      // separated_mobile_description,
      // additional_image,
      // payment_info,
      // shipping_info,
      // exchange_info,
      // service_info,
      // product_tax_type_text,
      // country_hscode,
      // simple_description,
      // tags,
      // shipping_fee_by_product,
      // shipping_method,
      // prepaid_shipping_fee,
      // shipping_period,
      // shipping_scope,
      // shipping_area,
      // shipping_fee_type,
      // shipping_rates,
      // origin_place_code,
      // additional_information,
      // image_upload_type,
      // main,
      // relational_product,      
    } = product

    return {
      shop_no,
      product_no, 
      product_name,
      product_code,
      eng_product_name,
      custom_product_code,
      supply_product_name,
      internal_product_name,
      model_name,
      price,
      retail_price,
      supply_price,
      display,
      selling,
      product_condition,
      product_used_month,
      summary_description,
      margin_rate,
      tax_type,
      tax_amount,
      price_content,
      buy_limit_by_product,
      buy_limit_type,
      buy_group_list: buy_group_list === null ? null : buy_group_list.join(),
      repurchase_restriction,
      single_purchase_restriction,
      buy_unit_type,
      buy_unit,
      order_quantity_limit_type,
      minimum_quantity,
      maximum_quantity,
      points_by_product,
      points_setting_by_payment,
      except_member_points,
      use_product_volume,
      product_width,
      product_height,
      product_length,  
      adult_certification,
      detail_image,
      list_image,
      tiny_image,
      small_image,
      use_naverpay,
      naverpay_type,
      manufacturer_code,
      trend_code,
      brand_code,
      supplier_code,
      made_date: made_date === '' ? '' : new Date(made_date),
      origin_classification,
      origin_place_no,
      origin_place_value,
      made_in_code,
      hscode,
      product_weight,
      product_material,
      english_product_material,
      cloth_fabric,
      approve_status,
      classification_code,
      sold_out,
      additional_price,
      clearance_category_eng,
      clearance_category_kor,
      clearance_category_code,
      exposure_limit_type,
      set_product_type,
      updated_date: new Date(updated_date) || '',
      created_date: new Date(created_date),   // 알아서 바꿔주네.. "2018-01-18T11:19:27+09:00"
      exp_start_date: new Date(exp_start_date),
      exp_end_date: new Date(exp_end_date),
      api_get_date: new Date(),
    }
  }

  static convertCategoryToDataSet(category) { 
    const {
      shop_no,
      category_no,
      category_depth,
      parent_category_no,
      category_name,
      display_type,
      full_category_name: {
        1: main_category_name,
        2: middle_category_name,
        3: small_category_name,
        4: detailed_category_name,
      },
      root_category_no,
      use_main,
      use_display,
      display_order,
      full_category_no:{
        1: main_category_no,
        2: middle_category_no,
        3: small_category_no,
        4: detailed_category_no,
      },
      soldout_product_display,
      sub_category_product_display,
      hashtag_product_display,
      hash_tags,
      product_display_scope,
      product_display_type,
      product_display_key,
      product_display_sort,
      product_display_period,
      normal_product_display_type,
      normal_product_display_key,
      normal_product_display_sort,
      normal_product_display_period,
      recommend_product_display_type,
      recommend_product_display_key,
      recommend_product_display_sort,
      recommend_product_display_period,
      new_product_display_type,
      new_product_display_key,
      new_product_display_sort,
      new_product_display_period,
      access_authority,
    } = category;

    return {
      shop_no,
      category_no,
      category_depth,
      parent_category_no,
      category_name,
      display_type,
      root_category_no : root_category_no || '',
      use_main,
      use_display,
      display_order,
      soldout_product_display,
      sub_category_product_display,
      hashtag_product_display,
      hash_tags : hash_tags.join(),
      product_dp_scope: product_display_scope,
      product_dp_type: product_display_type,
      product_dp_key: product_display_key,
      product_dp_sort: product_display_sort,
      product_dp_period: product_display_period,
      n_product_dp_type: normal_product_display_type || '',
      n_product_dp_key: normal_product_display_key || '',
      n_product_dp_sort: normal_product_display_sort || '',
      n_product_dp_period: normal_product_display_period || '',
      r_product_dp_type: recommend_product_display_type || '',
      r_product_dp_key: recommend_product_display_key || '',
      r_product_dp_sort: recommend_product_display_sort || '',
      r_product_dp_period: recommend_product_display_period || '',
      new_product_dp_type: new_product_display_type || '',
      new_product_dp_key: new_product_display_key || '',
      new_product_dp_sort: new_product_display_sort || '',
      new_product_dp_period: new_product_display_period || '',
      access_authority,
      api_get_date: new Date(),
    }

  }

  static convertOrderToDataSet(order) { 
    const {
      shop_no,
      currency,
      order_id,
      market_id,
      market_order_info,
      member_id,
      member_email,
      member_authentication,
      initial_order_amount : {
        order_price_amount : i_order_price_amount,
        shipping_fee : i_shipping_fee,
        points_spent_amount : i_points_spent_amount,
        credits_spent_amount : i_credits_spent_amount,
        coupon_discount_price : i_coupon_discount_price,
        membership_discount_amount: i_membership_discount_amount,
        shipping_fee_discount_amount: i_shipping_fee_discount_amount,
        app_discount_amount: i_app_discount_amount,
        point_incentive_amount : i_point_incentive_amount,
        total_amount_due: i_total_amount_due,
        payment_amount: i_payment_amount,
      },
      actual_order_amount : {
        order_price_amount,
        shipping_fee,
        points_spent_amount,
        credits_spent_amount,
        coupon_discount_price,
        membership_discount_amount,
        shipping_fee_discount_amount,
        app_discount_amount,
        point_incentive_amount,
        total_amount_due,
        payment_amount: a_payment_amount,        
      },
      billing_name,
      bank_code,
      bank_code_name,
      payment_method,
      payment_method_name,
      payment_gateway_name,
      sub_payment_method_name,
      sub_payment_method_code,
      paid,
      order_date,
      first_order,
      payment_date,
      order_from_mobile,
      use_escrow,
      bank_account_no,
      bank_account_owner_name,
      market_seller_id,
      payment_amount,
      cancel_date,
      order_place_name,
      order_place_id,
      payment_confirmation,
      commission,
      postpay,
      admin_additional_amount,
      additional_shipping_fee,
      international_shipping_insurance : int_shipping_insurance,
      additional_handling_fee,
      shipping_type,
      shipping_type_text,
      shipping_status,            

      wished_delivery_date,
      wished_delivery_time,
      wished_carrier_id,
      wished_carrier_name,
      return_confirmed_date,
      total_supply_price,
      naver_point,

      store_pickup,
      easypay_name,
      loan_status,
      subscription,
      multiple_addresses,
      exchange_rate,
      first_payment_method,
      naverpay_payment_information,      
    } = order;

    return {
      shop_no,
      currency,
      order_id,
      market_id,
      market_order_info,
      member_id,
      member_email,
      member_authentication,
      billing_name,
      bank_code,
      bank_code_name,
      payment_method : payment_method.join(),
      payment_method_name: payment_method_name.join(),
      payment_gateway_name,
      sub_payment_method_name,
      sub_payment_method_code,
      paid,
      order_date: new Date(order_date),
      first_order,
      payment_date: new Date(payment_date),
      order_from_mobile,
      use_escrow,
      bank_account_no,
      bank_account_owner_name,
      market_seller_id,
      payment_amount,
      cancel_date: new Date(cancel_date),
      order_place_name,
      order_place_id,
      payment_confirmation,
      commission,
      postpay,
      admin_additional_amount,
      additional_shipping_fee,
      int_shipping_insurance,
      additional_handling_fee,
      shipping_type,
      shipping_type_text,
      shipping_status,
      wished_delivery_date,
      wished_delivery_time,
      wished_carrier_id,
      wished_carrier_name,
      return_confirmed_date: new Date(return_confirmed_date),
      total_supply_price,
      naver_point,
      easypay_name,
      loan_status,
      subscription,
      multiple_addresses,
      exchange_rate,
      first_payment_method,
      naverpay_payment_information,
      store_pickup,
      api_get_date: new Date(),
    }

  } 

  static extractUpdateSqlBody(dataSet) {
    const keys = Object.getOwnPropertyNames(dataSet)
    let columns = keys.map((columnName)=> columnName +'= :' + columnName );
    let body = columns.join(', ')
    return body
  }

  static extractKeys(dataSet) {
    const keys = Object.getOwnPropertyNames(dataSet);
    return keys.join(', ');
  }

  static extractKeyValues(dataSet) {
    const keyValues = Object.getOwnPropertyNames(dataSet);
    return ':' + keyValues.join(', :');
  }

  static productInsertSql(keys, keyValues) {
    return `INSERT INTO ECP_PRODUCTS (${keys}) VALUES (${keyValues})`;
  }

  static productUpdateSql(updateColumns) {
    return `UPDATE ECP_PRODUCTS SET ${updateColumns} WHERE ECP_NAME = 'CAFE24' AND MALL_ID = :mallId AND SHOP_NO = :shop_no AND PRODUCT_NO = :product_no`;
  }

  static categoryInsertSql(keys, keyValues) {
    return `INSERT INTO ECP_CATEGORIES (${keys}) VALUES (${keyValues})`;
  }

  static orderInsertSql(keys, keyValues) {
    return `INSERT INTO ECP_ORDERS (${keys}) VALUES (${keyValues})`;
  }


  static convertAuthResultToDataSet(authInfo) {
    const {
      access_token,
      expires_at,
      refresh_token,
      refresh_token_expires_at,
      client_id,
      mall_id,
      user_id,
      scopes,
      issued_at,
    } = authInfo

    return {
      ecp_name: 'CAFE24',
      sch_duration : '5MIN',
      mall_id,
      access_token,
      at_exp_date: new Date(expires_at),  // string format 을 Date format 으로 변환
      refresh_token,
      rt_exp_date: new Date(refresh_token_expires_at),
      create_date: new Date(),
      update_date: new Date(),
      active: 'Y'
    }
  }

  static convertAuthResultForUpdate(authInfo) {
    const {
      access_token,
      expires_at,
      refresh_token,
      refresh_token_expires_at,
      client_id,
      mall_id,
      user_id,
      scopes,
      issued_at,
    } = authInfo

    return {
      ecp_name: 'CAFE24',
      mall_id,
      access_token,
      at_exp_date: new Date(expires_at),  // string format 을 Date format 으로 변환
      refresh_token,
      rt_exp_date: new Date(refresh_token_expires_at),
      create_date: new Date(),
      update_date: new Date(issued_at),
    }
  }  

  static setupInsertSql(keys, keyValues) {
    return `INSERT INTO ECP_PARTNERS_SETUP (${keys}) VALUES (${keyValues})`;
  } 

  static setupUpdateSql() {
    return `UPDATE ECP_PARTNERS_SETUP 
      SET ACCESS_TOKEN = :access_token,
        AT_EXP_DATE = :at_exp_date,
        REFRESH_TOKEN = :refresh_token,
        RT_EXP_DATE = :rt_exp_date,
        CREATE_DATE = :create_date,
        UPDATE_DATE = :update_date
      WHERE ECP_NAME = :ecp_name
        AND MALL_ID =  :mall_id`;
  }

  static getAccessTokenFromDBQuery() {
    return `SELECT ACCESS_TOKEN FROM ECP_PARTNERS_SETUP
      WHERE 1=1
      AND ECP_NAME = :ecpName
      AND MALL_ID = :mallId`
  }  

  static oceanScheduleFindQuery() {
    return `SELECT * FROM WSP_VSL_SCHEDULE
      WHERE 1=1
      AND POL_CD = :pol_cd
      AND POD_CD = :pod_cd
      AND POL_ETD_DT >= :pol_etd_dt`;
  }

  static airScheduleFindQuery() {
    return `SELECT * FROM AIR_SCHEDULE
      WHERE 1=1
      AND FM_LOC_CD = :fm_loc_cd
      AND TO_LOC_CD = :to_loc_cd
      AND STD >= :std`
  }

  static vesselInfoFindQuery() {
    return `SELECT IMO_NO, MMSI, CALLSIGN, VSL_NM, POS_LAT as latitude, POS_LON as longitude, POS_CRSE as course, POS_SPD, POS_REVD_DT 
      FROM VLUAIS.AIS_VSL_POS_INFO
      WHERE 1=1
      AND TRIM(VSL_NM) = :vslName`
  }

  static convertAirScheduleResult(sqlResult) {
    const {
      REQ_DT,
      SRCH_DT,
      DEP_ARR_CD,
      IATA_CD,
      ICAO_CD,
      FLT_NO,
      FM_LOC_CD,
      STD,
      ETD,
      ATD,
      TO_LOC_CD,
      STA,
      ETA,
      ATA,
      FLY_TIME,
      AIR_TP,
      FLT_TP,
      FLT_STS_NM
    } = sqlResult
    return {
      requestDate: REQ_DT,
      searchDate: SRCH_DT,
      departureArrivalCode: DEP_ARR_CD,
      IATACode: IATA_CD,
      ICAOCode: ICAO_CD,
      flightNo: FLT_NO,
      fromLocationCode: FM_LOC_CD,
      scheduledTimeOfDeparture: STD,
      estimatedTimeOfDeparture: ETD,
      actualTimeOfDeparture:ATD,
      toLocationCode: TO_LOC_CD,
      scheduledTimeOfArrival: STA,
      estimatedTimeOfArrival: ETA,
      actualTimeOfArrival: ATA,
      flightTime: FLY_TIME,
      aircraftType: AIR_TP,
      flightType: FLT_TP,
      flightStatusName: FLT_STS_NM
    }
  }

  static convertOceanScheduleResult(sqlResult) {
    const {
      CRR_CD,
      VSL_CD,
      VOY_NO_BND,
      CALL_PORT_NM,
      CALL_SEQ,
      POL_CD,
      POD_CD,
      POL_ETD_DT,
      POD_ETA_DT,
      CGO_CLOS_DT,
      TRNS_TM_DYS,
      CGO_CLOS_PORT_CD,
      REG_DT,
      REG_USR_NO,
      UPD_DT,
      UPD_USR_NO,
      DOC_CLOS_DT,
      BKG_SVC_YN,
      DRY_SPC_QTY,
      RF_SPC_QTY,
      DG_SPC_QTY,
      POL_TMNL_CD,
      POL_TMNL_NM,
      POD_TMNL_CD,
      POD_TMNL_NM
    } = sqlResult
    return {
      carrierCode: CRR_CD,
      vesselCode: VSL_CD,
      voyageNumberAndDirection: VOY_NO_BND,
      callingPortName: CALL_PORT_NM,
      callingSequence: CALL_SEQ,
      portOfLoadingCode: POL_CD,
      portOfDischargeCode: POD_CD,
      estimatedTimeOfDepartureAtPOL: POL_ETD_DT,
      estimatedTimeOfArrivalAtPOD: POD_ETA_DT,
      cargoClosingTime: CGO_CLOS_DT,
      cargoClosingPortCode : CGO_CLOS_PORT_CD,
      registrationDate: REG_DT,
      registeredUserNumber : REG_USR_NO,
      updatedDate : UPD_DT,
      updatedUserNumber : UPD_USR_NO,
      documentationClosingDate : DOC_CLOS_DT,
      bookingServiceIndicator : BKG_SVC_YN,
      drySpaceQuantity: DRY_SPC_QTY,
      reeferSpaceQuantity: RF_SPC_QTY,
      dangerSpaceQuantity: DG_SPC_QTY,
      POLTerminalCode: POL_TMNL_CD,
      POLTerminalName: POL_TMNL_NM,
      PODTerminalCode: POD_TMNL_CD,
      PODTerminalName: POD_TMNL_NM
    }

  }
 
  static convertOceanSchQueryParamsToData(params) {
    const {
      from,
      to,
      date
    } = params

    return {
      pol_cd: from,
      pod_cd: to,
      pol_etd_dt: date? new Date(date) : new Date()
    }
  }

  static convertAirSchQueryParamsToData(params) {
    const {
      from,
      to,
      date
    } = params
    return {
      fm_loc_cd: from,
      to_loc_cd: to,
      std: date? new Date(date) : new Date()
    }
  }

  static convertVesselInfo(sqlResult) {
    const {
      IMO_NO,
      MMSI,
      CALLSIGN,
      VSL_NM,
      LATITUDE,
      LONGITUDE,
      COURSE,
      POS_SPD,
      POS_REVD_DT
    } = sqlResult
    return {
      IMONumber: IMO_NO,
      MMSI,
      vesselCallSign: CALLSIGN,
      vessleName: VSL_NM,
      position:{
        latitude: LATITUDE,
        longitude: LONGITUDE,
        courseOverGround: COURSE,
        speedOverGround: POS_SPD,
        lastPositionReceivedDate: POS_REVD_DT
      }
    };
  }

  static getKRCurrentTime(date) {
    const timeGap = new Date().getTimezoneOffset();
    console.log(new Date(new Date().getTime() - timeGap*60*1000))
    return new Date(new Date().getTime() - timeGap*60*1000)
  }

  static get7daysbefore() {
    const now = new Date();
    return new Date(now.setDate(now.getDate() - 7))
  }

  static getDateTimeBefore(min) {
    let date = new Date();
    date.setMinutes(date.getMinutes() - min);
    return date;
  }

  static getTimeGapInMin(date) {
    const minGap = (new Date() - new Date(date)) / 1000 / 60;
    return Math.ceil(minGap);
  }
}

module.exports = MessageHandler;