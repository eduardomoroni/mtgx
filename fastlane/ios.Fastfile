platform :ios do
  desc 'Clean project medatata'
  lane :clean do
    clear_derived_data
    clean_build_artifacts
  end

  desc 'Fetch certificates and provisioning profiles'
  lane :certificates do
    match(
      app_identifier: 'org.reactjs.native.example.mtgx',
      clone_branch_directly: true,
      shallow_clone: true,
      readonly: false
    )
    match(
      app_identifier: 'org.reactjs.native.example.mtgx',
      clone_branch_directly: true,
      shallow_clone: true,
      type: 'appstore',
      readonly: false
    )
  end

  desc 'Build the iOS application.'
  lane :build do
    clean
    gym(
      scheme: 'mtgx', 
      workspace: './ios/mtgx.xcworkspace'
    )
  end

  desc "Push a new release build to the App Store"
  lane :release do
    certificates
    build
    increment_build_number(xcodeproj: "./ios/mtgx.xcodeproj")
    upload_to_app_store
  end
end
