function getFriendRequests() {

	$
			.ajax({
				type : "GET",
				url : "../com.ssdi.studentbudgetcenterserver/rest/requestcontroller",
				data : {
					methodId : "getFriendRequests"
				},
				async : true,
				contentType : "application/json; charset=utf-8",
				success : function(json) {

					var source = {
						datatype : "json",
						id : 'RequestId',
						datafields : [ {
							name : 'sentby',
							map : 'sentBy>username'
						}, {
							name : 'createDate',
							map : 'createDate'
						} ],
						localdata : json,
						acceptRequest : function(rowid, rowdata, position,
								commit) {

							commit(true);
						},
						ignoreRequest : function(rowid, commit) {

							commit(true);
						}

					};
					var dataAdapter = new $.jqx.dataAdapter(source);

					$("#jqxgrid")
							.jqxGrid(
									{
										width : 850,
										source : dataAdapter,
										columnsresize : true,
										showtoolbar : true,
										rendertoolbar : function(toolbar) {
											var me = this;
											var container = $("<div style='margin-bottom: 50px;'></div>");
											toolbar.append(container);
											container
													.append('<input id="acceptRequestButton" type="button" value="Accept Request" />');
											container
													.append('<input style="margin-left: 5px;" id="ignoreRequestButton" type="button" value="Ignore Request" />');
											$("#acceptRequestButton")
													.jqxButton({
														width : '150',
														height : '25'
													});
											;
											$("#ignoreRequestButton")
													.jqxButton({
														width : '150',
														height : '25'
													});
											;

											// Accept
											$("#acceptRequestButton")
													.on(
															'click',
															function() {
																var selectedrowindex = $(
																		"#jqxgrid")
																		.jqxGrid(
																				'getselectedrowindex');
																var rowscount = $(
																		"#jqxgrid")
																		.jqxGrid(
																				'getdatainformation').rowscount;
																if (selectedrowindex >= 0
																		&& selectedrowindex < rowscount) {
																	var id = $(
																			"#jqxgrid")
																			.jqxGrid(
																					'getrowid',
																					selectedrowindex);

																	$
																			.ajax({
																				type : "POST",
																				url : "../com.ssdi.studentbudgetcenterserver/rest/requestcontroller?acceptFriendRequest",
																				async : false,

																				data : {
																					requestID : id
																				},
																				contentType : "application/json; charset=utf-8",
																				success : function(
																						json) {

																					getFriendRequests();

																				},

																				error : function(
																						jqXHR,
																						textStatus,
																						errorThrown) {
																					console
																							.log("Something really bad happened "
																									+ textStatus);
																					$(
																							"#lblDisplayMsg")
																							.text(
																									textStatus);
																				}
																			});

																}
															});

											// Ignore
											$("#ignoreRequestButton")
													.on(
															'click',
															function() {
																var selectedrowindex = $(
																		"#jqxgrid")
																		.jqxGrid(
																				'getselectedrowindex');
																var rowscount = $(
																		"#jqxgrid")
																		.jqxGrid(
																				'getdatainformation').rowscount;
																if (selectedrowindex >= 0
																		&& selectedrowindex < rowscount) {
																	var id = $(
																			"#jqxgrid")
																			.jqxGrid(
																					'getrowid',
																					selectedrowindex);

																	$
																			.ajax({
																				type : "POST",
																				url : "../com.ssdi.studentbudgetcenterserver/rest/requestcontroller?ignoreFriendRequest",
																				async : false,

																				data : {
																					requestID : id
																				},
																				contentType : "application/json; charset=utf-8",
																				success : function(
																						json) {

																					getFriendRequests();

																				},

																				error : function(
																						jqXHR,
																						textStatus,
																						errorThrown) {
																					console
																							.log("Something really bad happened "
																									+ textStatus);
																					$(
																							"#lblDisplayMsg")
																							.text(
																									textStatus);
																				}
																			});
																}
															});
										},
										columns : [

										{
											text : 'Sent By',
											datafield : 'sentby',
											width : 250
										}, {
											text : 'Create Date',
											datafield : 'createDate',
											width : 250
										} ]
									});

				},
				// If there was no response from the server
				error : function(jqXHR, textStatus, errorThrown) {
					console.log("Something really bad happened " + textStatus);
					$("#lblDisplayMsg").text(textStatus);
				}
			});
}

function CreateFriendRequest() {
	value = $('#createFriendRequestForm').serialize();
	$.ajax({
		type : "POST",
		url : "../com.ssdi.studentbudgetcenterserver/rest/requestcontroller?"
				+ value,
		async : true,
		contentType : "application/json; charset=utf-8",
		success : function(json) {
			window.location = "ViewFriendRequests.html";
		},
		// If there was no response from the server
		error : function(jqXHR, textStatus, errorThrown) {
			console.log("Something really bad happened " + textStatus);
			$("#lblDisplayMsg").text(textStatus);
		}
	});
}

function populateUserList() {
	$.ajax({
		type : "GET",
		url : "../com.ssdi.studentbudgetcenterserver/rest/usercontroller",
		data : {
			methodId : "getUserNames"
		},

		dataType : "json",
		success : function(data) {

			var listItems;
			for (var i = 0; i < data.length; i++) {
				listItems += "<option value='" + data[i] + "'>" + data[i]
						+ "</option>";
			}
			$("#sendto").html(listItems);

		}
	});

}

function getTransferRequests() {

	$
			.ajax({
				type : "GET",
				url : "../com.ssdi.studentbudgetcenterserver/rest/requestcontroller",
				data : {
					methodId : "getTransferRequests"
				},
				async : true,
				contentType : "application/json; charset=utf-8",
				success : function(json) {

					var source = {
						datatype : "json",
						id : 'RequestId',
						datafields : [ {
							name : 'sentby',
							map : 'sentFrom>username'
						}, {
							name : 'amount',
							map : 'transferAmt'
						} ],
						localdata : json,
						acceptRequest : function(rowid, rowdata, position,
								commit) {

							commit(true);
						},
						ignoreRequest : function(rowid, commit) {

							commit(true);
						}

					};
					var dataAdapter = new $.jqx.dataAdapter(source);

					$("#jqxgrid")
							.jqxGrid(
									{
										width : 850,
										source : dataAdapter,
										columnsresize : true,
										showtoolbar : true,
										rendertoolbar : function(toolbar) {
											var me = this;
											var container = $("<div style='margin-bottom: 50px;'></div>");
											toolbar.append(container);
											container
													.append('<input id="acceptRequestButton" type="button" value="Accept Request" />');
											container
													.append('<input style="margin-left: 5px;" id="ignoreRequestButton" type="button" value="Ignore Request" />');
											$("#acceptRequestButton")
													.jqxButton({
														width : '150',
														height : '25'
													});
											;
											$("#ignoreRequestButton")
													.jqxButton({
														width : '150',
														height : '25'
													});
											;

											// Accept
											$("#acceptRequestButton")
													.on(
															'click',
															function() {
																var selectedrowindex = $(
																		"#jqxgrid")
																		.jqxGrid(
																				'getselectedrowindex');
																var rowscount = $(
																		"#jqxgrid")
																		.jqxGrid(
																				'getdatainformation').rowscount;
																if (selectedrowindex >= 0
																		&& selectedrowindex < rowscount) {
																	var id = $(
																			"#jqxgrid")
																			.jqxGrid(
																					'getrowid',
																					selectedrowindex);

																	$
																			.ajax({
																				type : "POST",
																				url : "../com.ssdi.studentbudgetcenterserver/rest/requestcontroller?acceptTransferRequest",
																				async : false,

																				data : {
																					requestID : id
																				},
																				contentType : "application/json; charset=utf-8",
																				success : function(
																						json) {

																					getTransferRequests();

																				},

																				error : function(
																						jqXHR,
																						textStatus,
																						errorThrown) {
																					console
																							.log("Something really bad happened "
																									+ textStatus);
																					$(
																							"#lblDisplayMsg")
																							.text(
																									textStatus);
																				}
																			});

																}
															});

											// Ignore
											$("#ignoreRequestButton")
													.on(
															'click',
															function() {
																var selectedrowindex = $(
																		"#jqxgrid")
																		.jqxGrid(
																				'getselectedrowindex');
																var rowscount = $(
																		"#jqxgrid")
																		.jqxGrid(
																				'getdatainformation').rowscount;
																if (selectedrowindex >= 0
																		&& selectedrowindex < rowscount) {
																	var id = $(
																			"#jqxgrid")
																			.jqxGrid(
																					'getrowid',
																					selectedrowindex);

																	$
																			.ajax({
																				type : "POST",
																				url : "../com.ssdi.studentbudgetcenterserver/rest/requestcontroller?ignoreTransferRequest",
																				async : false,

																				data : {
																					requestID : id
																				},
																				contentType : "application/json; charset=utf-8",
																				success : function(
																						json) {

																					getTransferRequests();

																				},

																				error : function(
																						jqXHR,
																						textStatus,
																						errorThrown) {
																					console
																							.log("Something really bad happened "
																									+ textStatus);
																					$(
																							"#lblDisplayMsg")
																							.text(
																									textStatus);
																				}
																			});
																}
															});
										},
										columns : [

										{
											text : 'Sent By',
											datafield : 'sentby',
											width : 250
										}, {
											text : 'Amount',
											datafield : 'amount',
											width : 250
										} ]
									});

				},
				// If there was no response from the server
				error : function(jqXHR, textStatus, errorThrown) {
					console.log("Something really bad happened " + textStatus);
					$("#lblDisplayMsg").text(textStatus);
				}
			});
}

function CreateTransferRequest() {
	value = $('#createTransferRequestForm').serialize();
	$.ajax({
		type : "POST",
		url : "../com.ssdi.studentbudgetcenterserver/rest/requestcontroller?"
				+ value,
		async : true,
		contentType : "application/json; charset=utf-8",
		success : function(json) {

			window.location = "ViewTransferRequests.html";

		},
		// If there was no response from the server
		error : function(jqXHR, textStatus, errorThrown) {
			console.log("Something really bad happened " + textStatus);
			$("#lblDisplayMsg").text(textStatus);
		}
	});
}
