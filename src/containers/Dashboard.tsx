
export default function Dashboard() {
    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row g-4 mb-4">
                <div className="col-sm-6 col-xl-3">
                    <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between">
                        <div className="content-left">
                            <span>Session</span>
                            <div className="d-flex align-items-end mt-2">
                            <h4 className="mb-0 me-2">21,459</h4>
                            <small className="text-success">(+29%)</small>
                            </div>
                            <small>Total Users</small>
                        </div>
                        <span className="badge bg-label-primary rounded p-2">
                            <i className="bx bx-user bx-sm"></i>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between">
                        <div className="content-left">
                            <span>Paid Users</span>
                            <div className="d-flex align-items-end mt-2">
                            <h4 className="mb-0 me-2">4,567</h4>
                            <small className="text-success">(+18%)</small>
                            </div>
                            <small>Last week analytics </small>
                        </div>
                        <span className="badge bg-label-danger rounded p-2">
                            <i className="bx bx-user-plus bx-sm"></i>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between">
                        <div className="content-left">
                            <span>Active Users</span>
                            <div className="d-flex align-items-end mt-2">
                            <h4 className="mb-0 me-2">19,860</h4>
                            <small className="text-danger">(-14%)</small>
                            </div>
                            <small>Last week analytics</small>
                        </div>
                        <span className="badge bg-label-success rounded p-2">
                            <i className="bx bx-group bx-sm"></i>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between">
                        <div className="content-left">
                            <span>Pending Users</span>
                            <div className="d-flex align-items-end mt-2">
                            <h4 className="mb-0 me-2">237</h4>
                            <small className="text-success">(+42%)</small>
                            </div>
                            <small>Last week analytics</small>
                        </div>
                        <span className="badge bg-label-warning rounded p-2">
                            <i className="bx bx-user-voice bx-sm"></i>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}