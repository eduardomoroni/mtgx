platform :ios do
  desc 'Fetch certificates and provisioning profiles'
  lane :certificates do
    match(app_identifier: 'org.reactjs.native.example.brisbane', type: 'development', readonly: true)
    match(app_identifier: 'org.reactjs.native.example.brisbane', type: 'appstore', readonly: true)
  end

  desc 'Clean project medatata'
  private_lane :clean do
    clear_derived_data
    xcclean
    clean_build_artifacts
  end

  desc 'Build the iOS application.'
  private_lane :build do
    clean
    certificates
    increment_build_number(xcodeproj: './ios/brisbane.xcodeproj')
    gym(scheme: 'brisbane', project: './ios/brisbane.xcodeproj')
  end

  desc "Push a new release build to the App Store"
  lane :release do
    increment_build_number(xcodeproj: "./ios/brisbane.xcodeproj")
    build_app(scheme: "brisbane", project: './ios/brisbane.xcodeproj')
    upload_to_app_store
  end
end
