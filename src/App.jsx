import './App.css';
import logo from './assets/logo.png';
import ellipse from './assets/Ellipse.png';
import rectangle from './assets/Rectangle.png';

function App() {
	return (
		<>
			<div className="mainDiv">
				<div className="innerDiv">
					<div className="leftPart">
						<img src={logo} alt="" className="logo" />
						<p>Login to your account</p>

						<input
							type="email"
							name="email"
							placeholder="your email address"
						/>
						<input
							type="password"
							name="password"
							placeholder="******"
						/>
						<div className="rememberme">
							<input
								type="checkbox"
								id="rememberme"
								name="rememberme"
								value="rememberme"
							/>
							<label for="rememberme">Remember username</label>
						</div>
						<button type="submit">Submit</button>
					</div>

					<div className="rightPart">
						<h1>
							Get future fit with the <br /> most in-demand
							skills!
						</h1>
						<p>Experience immersive learning with PRISM</p>
					</div>
				</div>
				<img className="ellipse" src={ellipse} alt="" />
				<img className="rectangle" src={rectangle} alt="" />
				<p className="copyright">
					Copyright @ 2023 Mazenet Solution Pvt Ltd. All Rights
					Reserved
				</p>
			</div>
		</>
	);
}

export default App;
